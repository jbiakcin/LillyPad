class AddContentToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :content, :text

    add_index :reviews, :spot_id
    add_index :reviews, :reviewer_id
  end
end
