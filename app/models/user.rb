class User < ApplicationRecord

    attr_reader :password
  
    validates :name, :email, :password_digest, :session_token, :home_city, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 8 }, allow_nil: true
    validate :host_requirements
    after_initialize :ensure_session_token
  
    has_many :meetups   # This is for hosts, shows that they are hosting meetups
    has_many :tickets   # This is for showing guests

    def host_requirements
      # user = User.find_by(email: email)
      if self.host_status == true
        unless self.phone
          errors[:phone] << "number can't be blank"
        end
        if self.story == ""
          errors[:story] << "can't be blank"
        end
      end
    end

    # def ensure_photo
    #   unless self.photo.attached?
    #     errors[:photo] << "must be attached"
    #   end
    # end

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token!
      generate_unique_session_token
      save!
      self.session_token
    end
  
    private
  
    def ensure_session_token
      generate_unique_session_token unless self.session_token
    end
  
    def new_session_token
      SecureRandom.urlsafe_base64
    end
  
    def generate_unique_session_token
      self.session_token = new_session_token
      while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
      end
      self.session_token
    end
  
  end
  