class CreateMeetUps < ActiveRecord::Migration[5.2]
  def change
    create_table :meetups do |t|
      t.string :location, null: false
      t.string :host, null: false   # Host is an user. No short cutting in SQL relation in Controller.
      t.datetime :time, null: false
      t.string :attendees
      t.integer :capacity, null: false

      t.timestamps
    end
    add_index :meetups, :host, unique: true
  end
end
