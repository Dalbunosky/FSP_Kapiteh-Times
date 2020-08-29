class ChangeMeetupEndtimeAddimgUrlToUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :meetups, :endtime
    add_column :users, :, :text
    add_column :meetups, :endtime, :integer
  end
end
