Rails.application.routes.draw do
	
  post   "/login",  to: "login#create"
  delete "/logout", to: "login#destroy"

  resources :teams do
  resources :players
  end

end
