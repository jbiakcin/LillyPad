class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :host_name, null: false
      t.string :site, null: false
      t.string :location_name, null: false
      t.integer :max_guests

      t.timestamps
    end
    add_index :spots, :host_id
    add_index :spots, :host_name
    add_index :spots, :site, unique: true
  end
end
