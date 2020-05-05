class ChangeStarttimeToInteger1 < ActiveRecord::Migration[5.2]
  def change
    # Rename OUTGOING Starttime column to Time
    rename_column :meetups, :starttime, :time
    # Create UPCOMING Starttime column, integer
    add_column :meetups, :starttime, :integer
  end
end
