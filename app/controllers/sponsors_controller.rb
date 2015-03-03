class SponsorsController < ApplicationController
	
	def new
		@team = Team.find(params[:team_id])
		@sponsor = @team.sponsors.build
	end

	def create
		@team = Team.find(params[:team_id])
	    @sponsor = @team.sponsors.new(sponsor_params)
		if @sponsor.save
	      flash[:notice] = "Team sponsored successfully"
	      redirect_to teams_path
	    else
	      flash[:error]  = "Sponsoring failed"
	      render teams_path
	    end
	end

	def sponsor_params
 		params.require(:sponsor).permit(:sponsorname, :email, :moneyperk, :limit)
	end
	
end
{:class=>"form-control", :value=>""}