class UserStoryTypeStringNotText < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :story, :string
  end
end
