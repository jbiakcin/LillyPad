class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :arrival_date, null: false
      t.date :departure_date, null: false
      t.integer :num_travelers, null: false
      t.integer :hopper_id
      t.integer :spot_id
      t.string :status, null: false

      t.timestamps
    end
  end
end
