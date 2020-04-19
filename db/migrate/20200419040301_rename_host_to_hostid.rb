class RenameHostToHostid < ActiveRecord::Migration[5.2]
  def change
    rename_column :meetups, :host, :host_id
  end
end
