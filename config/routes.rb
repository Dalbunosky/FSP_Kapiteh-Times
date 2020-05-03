Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :meetups do   
      # Yes, I can just create a line for tickets to join/leave, but this is good practice
      post :join, :on => :member
      delete :leave, :on => :member
      get :future, :on => :member   #For profile page meetups
      get :history, :on => :member  #For history page meetups
      resources :meetups, only: :index # This would fetch all meetups, and is possible only for Admin
    end

    resources :users, only: [:create, :index, :show, :update, :destroy]

    resource :session, only: [:create, :destroy] #sign-in, sign-out
    resources :tickets, only: [:create, :destroy] #join and leave meetup. Currently not used.
  end
  
  root "static_pages#origin"
end
