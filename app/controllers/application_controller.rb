class ApplicationController < ActionController::Base
	include Pundit
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

#helper_methods can be accessed in the views
  helper_method :current_team, :logged_in?

  	def current_team
    current_team_id = session[:current_team_id]
	    if current_team_id
	      @current_team ||= Team.find(current_team_id)
	    end
  	end

  	def logged_in?
    	current_team != nil
  	end

#do I need alias_method to overwrite an old method?

end
