Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :meetups
    resources :users, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy] #sign-in, sign-out
    # resources :ticket, only: [:index, :show, :create, :destroy] #sign-up, cancel, view, show all
  end
  
  root "static_pages#origin"
end
