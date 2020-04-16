class SetTimeToStarttimeAddEndtime < ActiveRecord::Migration[5.2]
  def change
    rename_column :meetups, :time, :starttime
    add_column :meetups, :endtime, :integer, array: true, default: []
  end
end
