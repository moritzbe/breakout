class TeamsController < ApplicationController
	
	def index
	end

	def new
		@team = Team.new
		@player1 = @team.players.build
		@player2 = @team.players.build
	end

	def create
		Rails.logger.debug("HELELEOIEHOUHEIU")
		Rails.logger.debug(team_params)
		@team = Team.new(team_params)
			if @team.save
				Rails.logger.debug(players_params)
				player_params1 = players_params[0].permit(:prename, :surname, :age, :email, :phone)
				player_params2 = players_params[1].permit(:prename, :surname, :age, :email, :phone)

				@player1 = @team.players.new(player_params1)
				@player2 = @team.players.new(player_params2)
				if @player1.save && @player2.save
		        	flash[:notice] = "Team created successfully"
		  			redirect_to action: "new"
		  		else
		  			flash[:notice] = "Signup not successful, try again"
		  			render "new"
		  		end
		  	end
	end

	def show
	end

	def edit
	end

	def update
	end

	def destroy
	end

	private

    def team_params
      params.require(:team).permit(:teamname)
    end

    def players_params
      params[:team][:players]
   	end
end
