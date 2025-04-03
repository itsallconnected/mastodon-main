# frozen_string_literal: true

namespace :xmpp do
  desc 'Sync Mastodon users with XMPP server'
  task sync_users: :environment do
    domain = ENV.fetch('XMPP_DOMAIN', 'xmpp.example.com')
    
    Account.local.find_each do |account|
      username = account.username
      # Generate or retrieve a password for XMPP
      xmpp_password = account.user.xmpp_credential&.password || SecureRandom.hex(16)
      
      # Create XMPP user via Prosody's admin API
      Rails.logger.info "Syncing XMPP user #{username}@#{domain}"
      system("prosodyctl adduser #{username}@#{domain} '#{xmpp_password}'")
      
      # Store credential if it's new
      if account.user.xmpp_credential.nil?
        XmppCredential.create!(
          user: account.user,
          username: username,
          password: xmpp_password
        )
        Rails.logger.info "Created XMPP credentials for #{username}"
      end
    end
  end
end 