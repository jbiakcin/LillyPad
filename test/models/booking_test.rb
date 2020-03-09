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
require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
