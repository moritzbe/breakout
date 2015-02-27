class CreateSponsors < ActiveRecord::Migration
  def change
    create_table :sponsors do |t|
    	t.belongs_to :team
    	t.string :sponsorname
    	t.string :email
    	t.float :moneyperk
    	t.float :limit
      t.timestamps null: false
    end
  end
end
