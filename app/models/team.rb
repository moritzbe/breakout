class Team < ActiveRecord::Base
	has_secure_password

	validates_presence_of :password, :on => :create


	has_many :players
	has_many :messages
	has_many :positions
	has_many :sponsors
	accepts_nested_attributes_for :players


end
