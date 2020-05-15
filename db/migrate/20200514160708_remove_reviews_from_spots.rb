class RemoveReviewsFromSpots < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :reviews, :text
  end
end
