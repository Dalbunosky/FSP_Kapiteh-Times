# t.string "location", null: false
# t.string "host", null: false
# t.datetime "time", null: false
# t.string "tickets"
# t.integer "capacity", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.index ["host"], name: "index_meetups_on_host", unique: true
  
# location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]
# time: [],     // [DOW,month, day,  year, hour, minute]

class Meetup < ApplicationRecord
    validates :location, :time, :capacity, :topic, :host, presence: true

  
    belongs_to :host,
      primary_key: :id,
      foreign_key: :host_id,
      class_name: 'User'
  
    has_many :tickets,
      primary_key: :id,
      foreign_key: :meetup_id,
      class_name: 'Ticket'
  
    has_many :guests,
      through: :tickets,
      source: :user


    # Ensure meetup is in the future
    # validate :date_must_be_in_the_future

    # def date_must_be_in_the_future
    #   if date.present? && date < Date.today
    #     errors.add(:date, "cannot be in the past")
    #   end
    # end
  
    def all_time_details_filled
    end

    def meetup_ends_after_start
    end

    def all_location_details_filled
    end


    # Ensure photo
    # validate :ensure_photo
    # has_one_attached :photo
  
    # def ensure_photo
    #   unless self.photo.attached?
    #     errors[:photo] << "must be attached"
    #   end
    # end

      # Add capacity
  
  end