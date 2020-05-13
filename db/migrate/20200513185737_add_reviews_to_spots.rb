class AddReviewsToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :reviews, :string
  end
end
