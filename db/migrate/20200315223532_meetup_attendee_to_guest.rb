class MeetupAttendeeToGuest < ActiveRecord::Migration[5.2]
  def up
    rename_column :meetups, :attendees, :guests
  end
end
