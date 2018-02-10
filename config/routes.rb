Rails.application.routes.draw do
  resources :stimulus, only: [:index]

  root 'stimulus#index'
end
