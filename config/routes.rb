Rails.application.routes.draw do

  get  "/register", to: "registration#new"
  post "/register", to: "registration#create"	
	
  post   "/login" => "login#create"
  delete "/logout" => "login#destroy"

  resources :teams do
  resources :players
  end

end
