Rails.application.routes.draw do

  get  "/register" => "registration#new"
  post "/register" => "registration#create"	
	
  post   "/login" => "login#create"
  delete "/logout" => "login#destroy"

  resources :teams, :except => [:create]
  resources :teams do
  resources :players
  end

end
