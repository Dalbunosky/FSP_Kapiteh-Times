class ChangeTimeToDateTime < ActiveRecord::Migration[5.2]
  def change
    rename_column :meetups, :starttime, :time
    add_column :meetups, :starttime, :datetime
  end
end
