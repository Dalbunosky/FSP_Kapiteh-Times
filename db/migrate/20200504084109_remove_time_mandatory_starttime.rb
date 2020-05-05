class RemoveTimeMandatoryStarttime < ActiveRecord::Migration[5.2]
  def change
    # Remove time column, which is now a duplicate
    remove_column :meetups, :time
    # Make starttime column not null
    change_column_null :meetups, :starttime, false
  end
end
