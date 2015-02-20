class Team < ActiveRecord::Base
	has_secure_password

	validates_presence_of :password, :on => :create


	has_many :players
	accepts_nested_attributes_for :players


end
