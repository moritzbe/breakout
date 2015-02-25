Rails.application.routes.draw do

  root 'welcome#home'

  get 'liveblog' => 'welcome#liveblog'
  get 'welcome/map' => 'welcome#map'
  get 'welcome/data' => 'welcome#data'

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
