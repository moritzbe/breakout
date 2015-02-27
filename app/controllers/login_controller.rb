class LoginController < ApplicationController
	
  def create
    team = Team.find_by(teamname: params[:teamname])
    # Session engaged
    if team && team.authenticate(params[:password])
      flash[:success] = "Login sucessful! Welcome #{team.teamname}!"

      session[:current_team_id] = team.id
      redirect_to liveblog_path
    else
      flash[:danger] = "Login was not sucessful"
      redirect_to liveblog_path
    end

  end

  def destroy
    session[:current_team_id] = nil
    redirect_to liveblog_path
  end

end
