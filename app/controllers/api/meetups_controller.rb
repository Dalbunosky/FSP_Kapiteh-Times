class Api::MeetupsController < ApplicationController

    # location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]
    # time: [],     // [DOW,month, day,  year, hour, minute]

    def index   # Show all meetups
        @meetups = Meetup.all.includes(:host)
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
        @meetup.host_id = current_user.id
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
        @user = current_user
        @meetups = current_user.meetups
        @hosted_meetups = current_user.hosted_meetups
        render 'api/users/index'
    end

    private
    def meetup_params
        # params.require(:meetup).permit(:topic, :capacity, location:[:lat, :lng, :venue_name, :address, :city, :state_province, :zip, :country], guests: [], starttime: [:dow, :month, :day, :year, :hour, :minute]) #, :photo)
        params.require(:meetup).permit(:topic, :capacity, location:[], guests: [], starttime: []) #, :photo)
        
    end
end