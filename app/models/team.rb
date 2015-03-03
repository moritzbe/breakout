class Team < ActiveRecord::Base
	has_secure_password
	validates_presence_of :teamname, presence: true, length: { in: 2..255 }
	validates_presence_of :password, :on => :create
	validates :teamname, uniqueness: true


	has_many :players
	has_many :messages
	has_many :positions
	has_many :sponsors
	accepts_nested_attributes_for :players

	def self.rank
		teamlist = []
		self.all.each do |t| 
			if t.positions.last.distance != nil
				teamlist << t.positions.last
			end
		end
		teamlist.sort_by{ |pos| pos.distance }.reverse.take(3)
	end

	def self.revenuerank
		teamlist = []
		self.all.each do |t| 
			distance = t.positions.last.distance
			cash = 0
			if distance != nil
				t.sponsors.each do |sponsor|
					if sponsor.limit.present?
						if distance*sponsor.moneyperk >= sponsor.limit
							cash += sponsor.limit
						else
							cash += distance * sponsor.moneyperk
						end
					else 
						cash += distance * sponsor.moneyperk
					end
				end
			end
		teamlist << [t.teamname, cash]
		end
	teamlist.sort_by{ |entry| entry[1] }.reverse
	end
end
