# frozen_string_literal: true

# == Schema Information
#
# Table name: xmpp_credentials
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)        not null, foreign key
#  username   :string           not null
#  password   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class XmppCredential < ApplicationRecord
  belongs_to :user

  validates :username, presence: true
  validates :password, presence: true
  
  # Ensure each user only has one XMPP credential
  validates :user_id, uniqueness: true
  
  # Encrypt password in database
  encrypts :password
end 