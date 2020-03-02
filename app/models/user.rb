# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  username        :string           not null
#  age             :integer          not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  gender          :string
#  city            :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  validates :first_name, :last_name, :username, :age, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password
end
