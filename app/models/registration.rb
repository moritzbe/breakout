class Registration < ActiveRecord::Base
	def self.randomcolor
		palette = ["#FF0000", "#FF8000", "#FFFF00", "#80FF00", "#00FF00", "#00FFFF", "#0080FF", "#0000FF", "#8000FF", "#FF00FF", "#FF0040", "#ECF6CE", "#1C1C1C", "#D358F7"]
		color = palette.sample
		return color
	end		
end
