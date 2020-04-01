class MeetupMakeGuestsNTimeArray < ActiveRecord::Migration[5.2]
  def change
    change_column :meetups, :guests, :string, array: true, default: [], using: "(string_to_array(guests, ','))"
    # change_column :meetups, :time, :integer, array: true, default: [], using: "(string_to_array(time, ','))"
    # change_column :meetups, :guests, "varchar[] USING (string_to_array(guests, ','))"
    # change_column :meetups, :time, "text[] USING ARRAY[x_id]::INTEGER[]", array: true, null: false, default: []
  end

  def down
    remove_column :meetups, :time, :integer, null: false
  end

  def up
    add_column :meetups, :time, :integer, array: true, null: false, default: []
  end
end
