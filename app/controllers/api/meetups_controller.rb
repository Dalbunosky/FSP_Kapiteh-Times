class Api::MeetupsController < ApplicationController

    # location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]
    # time: [],     // [DOW, year,month, day, hour, minute]

    def index 
        if params[:user_id]
            puts "ADMIN ONLY"
            @meetups = Meetup.all
        else
            puts "ALL FUTURE MEETUPS, FOR MEETUPS PAGE"
            # @meetups = Meetup.all
            # puts Date.today
            @meetups = Meetup.where("starttime > #{Time.now.to_i}")
            # @meetups = Meetup.where("starttime > 0")
            # puts @meetups[0].starttime
            # puts Time.now.to_i
            # puts Time.now
        end
        render 'api/meetups/index'
    end

    def profile # fetch upcoming meetups you're involved in
        puts "PROFILEEEEEEEEEEEEEEEEEE"
        @meetups = Meetup.joins("LEFT OUTER JOIN tickets on tickets.meetup_id = meetups.id").where("(starttime > #{Time.now.to_i}) and (tickets.user_id = #{current_user.id} or host_id = #{current_user.id})")
        render 'api/meetups/index'
    end

    def history # fetch past meetups you were involved in
        puts "HISTORYYYYYYYYYYYYYYY"
        @meetups = Meetup.joins("LEFT OUTER JOIN tickets on tickets.meetup_id = meetups.id").where("starttime < #{Time.now.to_i} and (tickets.user_id = #{current_user.id} or host_id = #{current_user.id})")
        render 'api/meetups/index'
    end

    def show    # Show each meetup
        @meetup = Meetup.find(params[:id])
        render 'api/meetups/show'
    end

    def new     # New meetup, available to hosts only, if necessary
        @meetup = Meetup.new
    end

    def edit    # Edit meetup, available to hosts only
        @meetup = Meetup.find(params[:id])
    end

    def create  # Creates meetup, available to hosts only
        @meetup = Meetup.new(meetup_params)
        # puts "HEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRE"
        # test = meetup_params.values
        # time = test[1]
        # puts test.length
        # puts test[1]
        # puts time.class
        # puts time
        puts @meetup.location
        puts @meetup.starttime
        puts @meetup.capacity
        puts @meetup.topic
        @meetup.host_id = current_user.id
        # @meetup.starttime = DateTime.parse("#{starttime[1]}-#{starttime[2]}-#{starttime[3]} #{starttime[4]}:#{starttime[5]}")
        if @meetup.save
            render 'api/meetups/show'
            # render 'api/users/show'
        else
            render json: @meetup.errors.full_messages, status: 422
        end
    end

    def update # Update meetup, available to hosts only
        @meetup = current_user.meetups.find(params[:id])
        if @meetup.update_attributes(meetup_params)

            # redirect_to meetup_url(@meetup)
            render 'api/meetups/show'
        else
            render json: @meetup.errors.full_messages, status: 422
            # render :edit
        end
    end

    def destroy # Delete meetup, available to hosts only
        @meetup = Meetup.find(params[:id])
        @meetup.destroy
        # @user = current_user
        # @meetups = current_user.meetups
        # @hosted_meetups = current_user.hosted_meetups
        # render 'api/users/show'
    end


    def join
      @ticket = Ticket.new(meetup_id: params[:id], user_id: current_user.id)
      if @ticket.save
        @meetup = @ticket.meetup
        render "/api/meetups/show"
      else
        render json: @ticket.errors.full_messages, status: 422
      end
    end
  
    def leave
      @ticket = Ticket.find_by(meetup_id: params[:id], user_id: current_user.id)
      if @ticket
        Ticket.destroy(@ticket.id)
        @meetup = @ticket.meetup    # Why need this?
        render "api/meetups/show"
      else
        render json: @ticket.errors.full_messages, status: 422
      end
    end

    private
    def meetup_params
        # params.require(:meetup).permit(:topic, :capacity, location:[:lat, :lng, :venue_name, :address, :city, :state_province, :zip, :country], guests: [], starttime: [:dow, :month, :day, :year, :hour, :minute]) #, :photo)
        params.require(:meetup).permit(:topic, :capacity, :metro_area, :starttime, location:[], guests: []) #, :photo)
        
    end
end
