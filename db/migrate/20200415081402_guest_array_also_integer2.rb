class GuestArrayAlsoInteger2 < ActiveRecord::Migration[5.2]
  def up
    add_column :meetups, :guests, :integer, array: true, null: false, default: []
  end
end
