class RegistrationController < ApplicationController
	
	def new
		@team = Team.new
		@player1 = @team.players.build
		@player2 = @team.players.build
	end

	def create
		@team = Team.new(team_params)

			if @team.save
				@player1 = @team.players.build(players_params[0].permit(:prename, :surname, :age, :email, :phone))
				@player2 = @team.players.build(players_params[1].permit(:prename, :surname, :age, :email, :phone))

			
				if @player1.save && @player2.save
		        	flash[:notice] = "Team created successfully"
		  			redirect_to "/teams"
		  		else
		  			flash[:notice] = "Signup not successful, try again"
		  			render :new
		  		end
		  	else
		  		@player1 = @team.players.build
				@player2 = @team.players.build
		  		render :new
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