# == Schema Information
#
# Table name: spots
#
#  id            :bigint           not null, primary key
#  host_id       :integer          not null
#  site          :string           not null
#  location_name :string           not null
#  max_guests    :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Spot < ApplicationRecord
  validates :host_id, :site, :location_name, presence: true
  validates :site, uniqueness: true

  belongs_to :host,
  class_name: :User,
  foreign_key: :host_id,
  primary_key: :id

  has_many :bookings,
  class_name: :Booking,
  foreign_key: :spot_id,
  primary_key: :id

  has_many :hoppers,
  through: :bookings,
  source: :hopper

  has_many :reviews,
  class_name: :Review,
  foreign_key: :review_id,
  primary_key: :id

  has_many :reviewers,
  through: :reviews,
  source: :reviewer

  has_many_attached :photos
end
