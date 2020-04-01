class Ticket < ApplicationRecord
    # This ticket is used to show that you will be attending the meeting.
    # A direct SQL relation between guest and meetup would be problematic.

    validates :user_id, :meetup_id, presence: true

    belongs_to :meetup,
        primary_key: :id,
        foreign_key: :meetup_id,
        class_name: 'Meetup'

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end
