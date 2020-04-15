class RemoveMeetupIndex < ActiveRecord::Migration[5.2]
  def change
    # Keeping time as array. Will check in database
    remove_index :meetups, :host
  end
end
