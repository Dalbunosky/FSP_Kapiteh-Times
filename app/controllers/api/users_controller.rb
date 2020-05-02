class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def update # Update user, available to hosts only
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
        render 'api/users/show'
    else
        render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @user = current_user
    @meetups = current_user.meetups
    @hosted_meetups = current_user.hosted_meetups
    render 'api/users/index'
  end

  def show
    @user = User.find(params[:id])
    # puts "HERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRE"
    if @user
      # puts "FOUND"
      # puts params.class
      # puts params.class
        render 'api/users/show'
    else
        render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = current_user
    @user.destroy
    # #Second option
    # @user.id = nil
    # delete @user
    # logout

    # Need to remove @user from future meetups
    # Need to cancel all meetups he is hosting
    render json: ["Thank you for trying Kapiteh Times!"]
  end

  # def destroy # Delete meetup, available to hosts only
  #   @meetup = Meetup.find(params[:id])
  #   @meetup.destroy
    #   @user = current_user
    #   @meetups = current_user.meetups
    #   @hosted_meetups = current_user.hosted_meetups
  #   render 'api/users/index'
  # end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :host_status, :home_city, :phone, :story, :email_subscription)
  end
end
  