class RemoveFirstLastName < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name, :string, null: false
    remove_column :users, :last_name, :string
    remove_column :users, :boolean, :boolean
  end
end
