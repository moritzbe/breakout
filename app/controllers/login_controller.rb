class LoginController < ApplicationController
	def create
    team = Team.where(teamname: params[:teamname]).first

    # Session engaged
    if team && team.authenticate(params[:password])
      flash[:success] = "Login sucessful! Welcome #{team.teamname}!"

      session[:current_team_id] = team.id
    else
      flash[:error] = "Login was not sucessful"
    end

    redirect_to teams_path
  end

  def destroy
    session[:current_team_id] = nil

    redirect_to teams_path
    # respond_to do |format|
    #   format.html { redirect_to teams_path }
    #   format.js   { render js: "window.location.href='#{cats_path}'" }
    end
  end
end
