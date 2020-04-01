class MeetupMakeLocationArray < ActiveRecord::Migration[5.2]
  def change
    change_column :meetups, :location, :string, array: true, default: [], using: "(string_to_array(location, ','))"
  end
end
