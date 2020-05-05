class ChangeStarttimetoTimeFormat < ActiveRecord::Migration[5.2]
  def change
    change_column :meetups, :starttime, :time
  end
end
