class HaveJustName < ActiveRecord::Migration[5.2]
  def down
    remove_column :users, :first_name, :string, null: false
    remove_column :users, :last_name, :string
  end

  def up
    add_column :users, :name, :string, :null => false
  end
end
