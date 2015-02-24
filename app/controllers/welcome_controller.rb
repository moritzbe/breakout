class WelcomeController < ApplicationController
	def home
		render "home", layout: false
	end

	def liveblog
		@teams = Team.all
		@positions = Team.first.positions
	end

	def map
		@positions = Team.first.positions
		respond_to do |format|
	      format.html { render 'index' }
	      format.json { render json: @positions.to_json }
	    end
	end
	
end
