class TeamsController < ApplicationController
	
	def index
	end

	def new
		@team = Team.new
		@player1 = @team.players.build
		@player2 = @team.players.build
	end

	def create
		@team = Team.new(team_params)
			if @team.save
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

    private
    def player_params1
      params.require(:player).permit(:prename, :surname, :age, :email, :phone)
    end

    private
    def player_params2
      params.require(:player).permit(:prename, :surname, :age, :email, :phone)
    end
end
