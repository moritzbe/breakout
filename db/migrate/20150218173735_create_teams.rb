class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
    	t.string :teamname
    	t.string :city
        t.timestamps null: false
    end
  end
end


    	# t.has_many :players
    	# t.has_many :sponsors
    	# t.has_many :comments
    	# t.has_many :challenges
    	# t.has_many :kilometers
    	# t.has_many :stops
    	# t.has_many :pictures