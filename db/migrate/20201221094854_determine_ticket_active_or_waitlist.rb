class DetermineTicketActiveOrWaitlist < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :waitlisted, :boolean, default: false
  end
end
