Rails.application.routes.draw do

  root 'welcome#home'

  get  "/register" => "registration#new"
  post "/register" => "registration#create"	
	
  post   "/login" => "login#create"
  delete "/logout" => "login#destroy"

  resources :start
  # resources :teams, :except => [:create]
  resources :teams do
  resources :players
  end

end
