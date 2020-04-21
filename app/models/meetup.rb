# t.string "location", null: false
# t.string "host", null: false
# t.datetime "time", null: false
# t.string "tickets"
# t.integer "capacity", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.index ["host"], name: "index_meetups_on_host", unique: true
  
# location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]
# time: [],     // [DOW, month, day, year, hour, minute]

class Meetup < ApplicationRecord
    validates :location, :starttime, :capacity, :topic, :host_id, presence: true
    validate :has_capacity, :time_filled, :location_filled
  
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

    def has_capacity
      self.capacity = self.capacity.to_i
        if self.capacity <= 0
          errors.add(:capacity, "needs to be higher")
        end
    end

    def time_filled
      filled = true
      self.starttime.map.with_index do |date_feat, i|
        if (date_feat == nil) || (date_feat == "")
          errors.add(:starttime, "is not filled in")
          filled = false
          break
        end
        self.starttime[i] = date_feat.to_i
      end
      if filled
        date_must_be_in_the_future(starttime)
      end
    end

    def date_must_be_in_the_future(time_arr)
      # [DOW, month, day, year, hour, minute]
      date = DateTime.new(time_arr[3],time_arr[1],time_arr[2],time_arr[4],time_arr[5],0)
      if date.present? && date < Date.today
        errors.add(:starttime, "needs to be in the future")
      end
    end

    def location_filled
      self.location.map do |address_line|
        if (address_line == nil) || (address_line == "")
          errors.add(:location, "is not filled in")
          break
        end
      end
    end

    def meetup_ends_after_start
      #   if start_date > end_date
      #     errors.add("Your start-time is after the end-time")
      #   end
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