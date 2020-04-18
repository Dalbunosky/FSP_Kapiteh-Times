class CorrectMeetupTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :[old_table_name], :[new_table_name]
  end
end
