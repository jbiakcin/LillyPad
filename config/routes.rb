Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show, :update] do
      resources :reviews, only: [:index, :create, :update, :destroy]
      resources :bookings, only: [:create]
    end
    resources :bookings, only: [:update, :destroy, :show]
    resources :reviews

    # get '/search' => 'spots#search', :as => 'search_page'
    get 'search', to: 'spots#search'
  end

  root to: "static_pages#root"
end
