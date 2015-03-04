class Position < ActiveRecord::Base
	belongs_to :team
	has_attached_file :image, styles: {:medium => "150x150>", :thumb => "100x100>"}
 	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

	# validates_presence_of :team_id, :latitude, :longitude, :distance, presence: true
	# validates_presence_of :text, presence: true, length: { in: 0..255 }

end
