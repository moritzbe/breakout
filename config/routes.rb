Rails.application.routes.draw do
	
  post   "/login" => "login#create"
  delete "/logout" => "login#destroy"

  resources :teams do
  resources :players
  end

end
