class SponsorsController < ApplicationController
	before_action :require_login

	
	private

	def require_login
    	unless logged_in?
	    	flash[:errormessagename] = "You are not logged in!"
	    	redirect_to liveblog_path
	    end
  	end
end
