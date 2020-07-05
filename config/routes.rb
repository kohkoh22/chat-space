Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:update, :edit, :index]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
