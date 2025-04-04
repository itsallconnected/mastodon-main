# frozen_string_literal: true

namespace :xmpp do
  desc 'Ensure all users have XMPP credentials'
  task sync_users: :environment do
    domain = ENV.fetch('XMPP_DOMAIN', 'localhost')
    
    puts 'Syncing users with XMPP server...'
    
    User.includes(:account, :xmpp_credential).find_each do |user|
      next if user.account.nil? || user.account.username.blank?
      
      if user.xmpp_credential.nil?
        puts "Creating XMPP credentials for #{user.account.username}"
        
        jid = "#{user.account.username}@#{domain}"
        XmppCredential.create!(user: user, jid: jid)
      else
        puts "XMPP credentials already exist for #{user.account.username}"
      end
    end
    
    puts 'Done!'
  end
  
  desc 'Register users with XMPP server via Prosody REST API'
  task register_with_server: :environment do
    require 'net/http'
    require 'uri'
    require 'json'
    
    domain = ENV.fetch('XMPP_DOMAIN', 'localhost')
    admin_jid = ENV.fetch('XMPP_ADMIN_JID', "admin@#{domain}")
    admin_password = ENV.fetch('XMPP_ADMIN_PASSWORD', 'admin')
    prosody_api_url = ENV.fetch('PROSODY_REST_API_URL', "http://localhost:5280/rest")
    
    puts 'Registering users with XMPP server...'
    
    # Authenticate with the Prosody REST API
    uri = URI.parse("#{prosody_api_url}/auth")
    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Post.new(uri.request_uri, { 'Content-Type' => 'application/json' })
    request.body = { username: admin_jid, password: admin_password }.to_json
    
    response = http.request(request)
    
    unless response.code.to_i == 200
      puts "Failed to authenticate with XMPP server: #{response.body}"
      exit 1
    end
    
    auth_token = JSON.parse(response.body)['token']
    
    # Register each user
    XmppCredential.includes(user: :account).find_each do |credential|
      username = credential.user.account.username
      jid = credential.jid
      password = credential.password
      
      puts "Registering #{username} (#{jid})..."
      
      uri = URI.parse("#{prosody_api_url}/users/#{domain}")
      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Post.new(uri.request_uri, { 
        'Content-Type' => 'application/json',
        'Authorization' => "Bearer #{auth_token}"
      })
      
      request.body = { 
        username: username,
        password: password 
      }.to_json
      
      response = http.request(request)
      
      if response.code.to_i == 201 || response.code.to_i == 200
        puts "  Successfully registered #{username}"
      elsif response.code.to_i == 409
        puts "  User #{username} already exists, updating password..."
        
        # Update existing user
        uri = URI.parse("#{prosody_api_url}/users/#{domain}/#{username}")
        http = Net::HTTP.new(uri.host, uri.port)
        request = Net::HTTP::Put.new(uri.request_uri, { 
          'Content-Type' => 'application/json',
          'Authorization' => "Bearer #{auth_token}"
        })
        
        request.body = { password: password }.to_json
        response = http.request(request)
        
        if response.code.to_i == 200
          puts "  Successfully updated #{username}'s password"
        else
          puts "  Failed to update #{username}'s password: #{response.body}"
        end
      else
        puts "  Failed to register #{username}: #{response.body}"
      end
    end
    
    puts 'Done!'
  end
end 