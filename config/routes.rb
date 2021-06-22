Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :meetups do   
      # Yes, I can just create a line for tickets to join/leave, but this is good practice
      post :join, :on => :member
      post :waitlist, :on => :member
      delete :leave, :on => :member
      get :profile, :on => :member   #For profile page meetups
      get :history, :on => :member  #For history page meetups
      get :all, :on => :member  #Fetches all meetups. Admin only
      resources :meetups, only: :index # This would fetch all meetups the host is hosting
    end

    resources :users do #, only: [:create, :index, :show, :update, :destroy] 
    # # do
      patch :password   #For changing password
    end

    resource :session, only: [:create, :destroy] #sign-in, sign-out
    resources :tickets, only: [:create, :destroy] #join and leave meetup. Currently not used.
  end
  
  root "static_pages#origin"
end
