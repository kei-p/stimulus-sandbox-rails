Rails.application.routes.draw do
  resources :stimulus, only: [:index] do
    collection do
      get :clock
      get :nested_form
    end
  end

  root 'stimulus#index'
end
