class RemoveMsgColFromBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :message, :text
  end
end
