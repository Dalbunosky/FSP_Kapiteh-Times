class KillNickName < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :nickname, :string, null: false
  end
end
