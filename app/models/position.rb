class Position < ActiveRecord::Base
	belongs_to :team
	validates_presence_of :team_id, :latitude, :longitude, :distance, presence: true
	validates_presence_of :text, presence: true, length: { in: 0..255 }

end
