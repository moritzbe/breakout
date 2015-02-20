class RegistrationController < ApplicationController
	
	def new
		@team = Team.new
		@player1 = @team.players.build
		@player2 = @team.players.build
	end

	def create
		@team = Team.new(team_params)
			if @team.save
				@players = []
				[0,1].each do |i|
				@players[i] = @team.players.new(players_params[i].permit(:prename, :surname, :age, :email, :phone))
				end	
				if @players[0].save && @players[1].save
		        	flash[:notice] = "Team created successfully"
		  			redirect_to action: "new"
		  		else
		  			flash[:notice] = "Signup not successful, try again"
		  			render "new"
		  		end
		  	end
	end

	private

    def team_params
      params.require(:team).permit(:teamname, :password, :password_confirmation)
    end

    def players_params
      params[:team][:players]
   	end
end
