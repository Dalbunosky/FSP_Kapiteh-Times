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

  def password  
    @user = User.find_by_id(params[:id], params[:password])
    if @user
      # User entered correct password, check new password's length
      if params[:new_password].length >= 8
        # Password is long enough. Assign new password
        @user.password=(params[:new_password])
        @user.save
        render json: ["Password successfully changed."]
      else
        # Password too short. Reject
        render json: ["New password is too short"], status: 401
      end
    else
      render json: ["Old password entered is incorrect"], status: 401
    end
    
  end


  # def update # Update user, available to hosts only
  #   @user = User.find(params[:id])
  #   if @user.update_attributes(user_params)
  #       render 'api/users/show'
  #   else
  #       render json: @user.errors.full_messages, status: 422
  #   end
  # end

  def index
    @user = current_user
    @meetups = current_user.meetups
    @hosted_meetups = current_user.hosted_meetups
    render 'api/users/index'
  end

  def show
    @user = User.find(params[:id])
    if @user
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
    # params.require(:user).permit(:id, :name, :email, :password, :host_status, :home_city, :phone, :story, :email_subscription, :profile_pic)
    params.require(:user).permit(:name, :email, :password, :host_status, :home_city, :phone, :story, :email_subscription, :profile_pic)
  end

  def new_password_params
    params.require(:user).permit(:id, :old_password, :new_password)
  end
end
  