class ChangeHostToHostid < ActiveRecord::Migration[5.2]
  def change
    change_column :meetups, :host, 'integer USING CAST(host AS integer)'
    # rename_column :meetups, :host, :host_id

    # add_column :meetups, :host_id, :integer, null: false
    # add_index :meetups, :host_id, unique: true
    # remove_column :meetups, :host, :string, null: false
    # remove_index :meetups, :index_meetups_on_host
  end
end
