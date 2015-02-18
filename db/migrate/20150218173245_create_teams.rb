class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
    	t.string :pl1_prename
    	t.string :pl1_surname
    	t.string :pl2_prename
    	t.string :pl2_surname
    	t.integer :pl1_age
    	t.integer :pl2_age
    	t.string :pl1_email
    	t.string :pl2_email
    	t.integer :pl1_phone
    	t.integer :pl2_phone
    	t.string :teamname
        t.timestamps null: false
    end
  end
end
