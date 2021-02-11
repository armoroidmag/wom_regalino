Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  resources :users do
    collection do
      get :likes
    end
  end
  resources :items do
    collection do
      get 'search'
    end
    resource :likes, only: [:create, :destroy]
    resources :reviews, only: [:index, :create, :show]
  end
  resources :relationships, only: [:create, :destroy]
end
