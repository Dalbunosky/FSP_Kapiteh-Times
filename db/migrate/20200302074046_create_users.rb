class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :nickname, null: false
      t.string :first_name
      t.string :last_name
      t.string :home_city, null: false
      t.boolean :email_subscription, null: false, :default => true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :host_status, :boolean, :default => false


      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
