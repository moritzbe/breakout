class PositionsController < ApplicationController
	# before_action :require_login

	def new
		@team = Team.find(1)
		@position = @team.positions.build
		# @team = Team.find(session[:current_team_id])
	end

	def create
		@position = Position.new(position_params)
			if @position.save			
				redirect_to new_team_position_path
		  	else
		  		render :new
		  	end
	end

	private
		def position_params
			params.require(:position).permit(:longitude, :latitude, :text)
		end
end
