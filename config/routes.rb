Rails.application.routes.draw do
  resources :messages
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :messages, only: %i[index], defaults: { format: :json }
    end
  end


  # Defines the root path route ("/")
  # root "articles#index"
end
