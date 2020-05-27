class ChangeMeetupEndtimeAddimgUrlToUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :meetups, :endtime
    add_column :users, :img_url, :text
    add_column :meetups, :endtime, :integer
  end
end
