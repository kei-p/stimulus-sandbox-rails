Rails.application.routes.draw do
  resources :stimulus, only: [:index] do
    collection do
      get :clock
    end
  end

  root 'stimulus#index'
end
