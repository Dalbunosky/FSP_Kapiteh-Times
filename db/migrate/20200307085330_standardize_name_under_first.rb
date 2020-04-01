class StandardizeNameUnderFirst < ActiveRecord::Migration[5.2]
  def down
    remove_column :users, :nickname, :string, null: false
    change_column :users, :first_name, :string
  end

  def up
    change_column :users, :first_name, :string, :null => false
  end
end
  