# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  spot_id     :integer
#  reviewer_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  content     :text
#
class Review < ApplicationRecord
  validates :content, :reviewer_id, :spot_id, presence: true

  belongs_to :reviewer,
  class_name: :User,
  foreign_key: :reviewer_id,
  primary_key: :id

  belongs_to :spot,
  class_name: :Spot,
  foreign_key: :spot_id,
  primary_key: :id
end
