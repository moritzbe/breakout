class LoginController < ApplicationController
	def create
    team = Team.where(teamname: params[:teamname]).first

    # Session engaged
    if team && team.authenticate(params[:password])
      flash[:success] = "Login sucessful! Welcome #{team.teamname}!"

      session[:current_team_id] = team.id
    else
      flash[:danger] = "Login was not sucessful"
    end

    redirect_to teams_path
  end

  def destroy
    session[:current_team_id] = nil

    redirect_to teams_path
  end

end
