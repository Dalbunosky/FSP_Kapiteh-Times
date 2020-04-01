class AddStoryToUserNTopicToMeetup < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :story, :text
    add_column :meetups, :topic, :text, null: false
  end
end
