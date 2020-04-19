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
    validates :location, :starttime, :capacity, :topic, :host_id, presence: true
    validate :has_capacity

  
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
    def has_capacity
      self.capacity = self.capacity.to_i
        if self.capacity <= 0
          puts errors.class
          puts errors
          errors.add(:capacity, "needs to be higher")
        end
    end

    def date_must_be_in_the_future
    #   if date.present? && date < Date.today
    #     errors.add(:date, "cannot be in the past")
    #   end
    end
  
    def all_time_details_filled
    end

    def meetup_ends_after_start
      #   if start_date > end_date
      #     errors.add("Your start-time is after the end-time")
      #   end
    end

    def all_location_details_filled
    end

    def no_conflicting_meetups
      # CHECK ONLY IN FUTURE MEETUPS. HOPEFULLY THEY ARE SORTED BY STARTTIME
      # AGAINST ANOTHER MEETUP, FLAG IF:
      #   YOUR START AND/OR END IS AFTER THEIR START BUT BEFORE THEIR END
      #   THEIR START AND/OR END IS AFTER YOUR START BUT BEFORE YOUR END
      #     errors.add("You already have another meetup at that time")
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