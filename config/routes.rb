Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show] do
      resources :bookings, only: [:create]
    end
    resources :bookings, only: [:update, :destroy, :show]

    # get '/search' => 'spots#search', :as => 'search_page'
    get 'search', to: 'spots#search'
  end

  root to: "static_pages#root"
end
