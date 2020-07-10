class AddImageToUserCwsStyle < ActiveRecord::Migration[5.2]
  def self.up
    change_table :users do |t|
      t.attachment :image
    end
  end
  # def change
  # end
end
