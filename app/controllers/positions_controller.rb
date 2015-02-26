class PositionsController < ApplicationController
	before_action :require_login

	def new
		@team = Team.find(session[:current_team_id])
	end

	def create
		# @team = Team.find(session[:current_team_id])
		# @position = @team.positions.new
		# @team = Team.new(team_params)
		# @team.teamcolor = Registration.randomcolor

		# 	if @team.save
		# 		@player1 = @team.players.build(players_params[0].permit(:prename, :surname, :age, :email, :phone))
		# 		@player2 = @team.players.build(players_params[1].permit(:prename, :surname, :age, :email, :phone))

			
		# 		if @player1.save && @player2.save
		#         	flash[:notice] = "Team created successfully"
		#   			redirect_to "/teams"
		#   		else
		#   			flash[:notice] = "Signup not successful, try again"
		#   			render :new
		#   		end
		#   	else
		#   		@player1 = @team.players.build
		# 		@player2 = @team.players.build
		#   		render :new
		#   	end
	end
end
