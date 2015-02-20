class TeamsController < ApplicationController
	
	def index
		@teams = Team.all
	end

	def show
	end

	def edit
		@team = Team.find(session[:current_team_id])
	end

	def update
	end

end

