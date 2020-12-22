class AddWaitlist < ActiveRecord::Migration[5.2]
  def change
    add_column :meetups, :waitlist, :integer, default: 0
  end
end
