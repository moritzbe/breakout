Rails.application.routes.draw do

  root 'welcome#home'

  get 'liveblog' => 'welcome#liveblog'
  get 'welcome/map' => 'welcome#map'
  get 'welcome/data' => 'welcome#data'

  get  "/register" => "registrations#new"
  post "/register" => "registrations#create"	
	
  post   "/login" => "login#create"
  delete "/logout" => "login#destroy"

  resources :start
  # resources :teams, :except => [:create]
  resources :teams do
  resources :players
  resources :positions
  resources :sponsors
  end

end
