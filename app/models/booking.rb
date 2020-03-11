# == Schema Information
#
# Table name: bookings
#
#  id             :bigint           not null, primary key
#  arrival_date   :date             not null
#  departure_date :date             not null
#  num_travelers  :integer          not null
#  hopper_id      :integer
#  spot_id        :integer
#  status         :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Booking < ApplicationRecord
  validates :arrival_date, :departure_date, :num_travelers, :status, presence: true
  validates :status, inclusion: {in: ["Pending", "Approved", "Denied"]}

  belongs_to :hopper,
  class_name: :User,
  foreign_key: :hopper_id,
  primary_key: :id

  belongs_to :spot,
  class_name: :Spot,
  foreign_key: :spot_id,
  primary_key: :id
end
