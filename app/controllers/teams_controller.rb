class TeamsController < ApplicationController
	before_action :require_login, :except => [:index, :show]
	def index
		@teams = Team.all
	end

	def show
	end

	def edit
		@team = Team.find(session[:current_team_id])
	end

	def update
		@team = Team.find(session[:current_team_id])
	    @team.update(team_params)
	    @team.players[0].update(players_params[0].permit(:prename, :surname, :age, :email, :phone))
		@team.players[1].update(players_params[1].permit(:prename, :surname, :age, :email, :phone))
		if @team.update(team_params)
	      # http://guides.rubyonrails.org/action_controller_overview.html#the-flash
	      flash[:notice] = "Cat updated successfully"
	      redirect_to teams_path
	    else
	      flash[:error]  = "Update failed"

	      render :edit
	    end
	end

	private

	def require_login
    	unless logged_in?
	    	flash[:errormessagename] = "You are not logged in!"
	    	redirect_to teams_path
	    end
  	end

    def team_params
      params.require(:team).permit(:teamname, :password, :password_confirmation)
    end

    def players_params
      params[:team][:players]
   	end

end

