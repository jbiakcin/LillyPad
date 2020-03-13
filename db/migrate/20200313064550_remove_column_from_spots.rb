class RemoveColumnFromSpots < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :host_name
  end
end
