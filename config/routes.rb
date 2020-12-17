Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  resources :users
  resources :items do
    resource :likes, only: [:create, :destroy]
    resources :reviews, only: [:index, :create]
  end
end
