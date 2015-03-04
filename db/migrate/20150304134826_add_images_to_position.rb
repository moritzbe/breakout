class AddImagesToPosition < ActiveRecord::Migration
	def self.up
		add_attachment :positions, :image
	end
	def self.down
		remove_attachment :positions, :image
	end
end
