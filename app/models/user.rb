# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#

class User < ApplicationRecord
  has_many :applications, class_name: 'Doorkeeper::Application', as: :owner, dependent: nil
  has_many :backups, inverse_of: :user, dependent: nil
  has_many :invites, inverse_of: :user, dependent: nil
  has_many :markers, inverse_of: :user, dependent: :destroy
  has_many :webauthn_credentials, dependent: :destroy
  has_many :ips, class_name: 'UserIp', inverse_of: :user, dependent: nil
  has_one :xmpp_credential, dependent: :destroy
end 