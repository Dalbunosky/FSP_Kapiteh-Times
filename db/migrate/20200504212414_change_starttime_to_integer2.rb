class ChangeStarttimeToInteger2 < ActiveRecord::Migration[5.2]
  # Migrate this file AFTER all meetups have had their UPCOMING starttime updated
  def change
    # Remove OUTGOING time
    remove_column :meetups, :time
    # Make UPCOMING starttime column NOT NULL
    change_column_null :meetups, :starttime, false
    # Migration Complete
  end
end
