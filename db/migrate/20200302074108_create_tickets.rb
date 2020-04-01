class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :user_id, null: false
      t.integer :meetup_id, null: false

      t.timestamps
    end
    add_index :tickets, [:user_id, :meetup_id], unique: true
  end
end
