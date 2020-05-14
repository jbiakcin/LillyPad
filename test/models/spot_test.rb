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
#  reviews       :text             default("{}"), is an Array
#
require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
