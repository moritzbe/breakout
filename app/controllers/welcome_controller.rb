class WelcomeController < ApplicationController

	def home
		render "home", layout: false
	end

	def liveblog
		@teams = Team.all
	end

	def data
		@teams = Team.all
		@data = []
		@teams.each do |team|
			teamdata = {}
			teamdata[:team] = team
			teamdata[:positions] = team.positions
			teamdata[:messages] = team.messages
			teamdata[:players] = team.players
			@data << teamdata
		end

		render json: @data.to_json
	end

	def map
		@positions = Team.first.positions
		respond_to do |format|
	      format.html { render 'index' }
	      format.json { render json: @positions.to_json }
	    end
	end
	private

	
end
