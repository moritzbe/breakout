class Player < ActiveRecord::Base
	belongs_to :team
	# validates :prename, :surname, :email, presence: true, length: { in: 2..255 }
	# validates :phone, :age, presence: true, length: { in: 2..255 }
end
