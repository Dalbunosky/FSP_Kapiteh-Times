class AddMetroAreaToMeetups < ActiveRecord::Migration[5.2]
  def change
    add_column :meetups, :metro_area, :text, null: false
  end
end
