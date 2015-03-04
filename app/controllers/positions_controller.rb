class PositionsController < ApplicationController
	before_action :require_login

	def new
		@team = Team.all.find(session[:current_team_id])
		@position = @team.positions.build
	end

	def create
		@team = Team.all.find(session[:current_team_id])
		@position = @team.positions.new(position_params)
			if @position.save			
				redirect_to liveblog_path
		  	else
		  		render new_team_position_path(@team)
		  	end
	end

	private
		def require_login
	    	unless logged_in?
		    	flash[:errormessagename] = "You are not logged in!"
		    	redirect_to liveblog_path
		    end
	  	end
		def position_params
			params.require(:position).permit(:longitude, :latitude, :text, :distance, :image)
		end
end
