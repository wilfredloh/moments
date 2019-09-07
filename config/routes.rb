Rails.application.routes.draw do
  resources :moments

  get '/m/:hash' => 'moments#card' 

  devise_for :users
  root 'login#index'
  get '*path' => redirect('/')

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
