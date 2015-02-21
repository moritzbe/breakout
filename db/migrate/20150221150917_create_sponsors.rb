class CreateSponsors < ActiveRecord::Migration
  def change
    create_table :sponsors do |t|
    	t.belongs_to :team
    	t.string :sponsorname
    	t.string :email
    	t.integer :moneyperk
    	t.integer :limit
      t.timestamps null: false
    end
  end
end
