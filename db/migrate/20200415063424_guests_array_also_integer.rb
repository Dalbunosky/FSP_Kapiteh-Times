class GuestsArrayAlsoInteger < ActiveRecord::Migration[5.2]
  # def change
  #   change_column :meetups, :guests, :integer, array: true, default: [], using: "(integer_to_array(guests, ','))"
  #   change_column :meetups, :guests, :string, array: true, default: [], using: "(string_to_array(guests, ','))"
    
  #   add_column :meetups, :time, :integer, array: true, null: false, default: []
  # end

  def down
    drop_column :meetups, :guests, :string
  end

  # def up
  #   add_column :meetups, :guests, :integer, array: true, null: false, default: []
  # end

  # def change
  #   change_column :meetups, :guests, :integer, array: true, null: false, default: []
  #   change_column :meetups, :guests, :integer, array: true, default: [], using: "(integer_to_array(guests, ','))"
  # end

end
