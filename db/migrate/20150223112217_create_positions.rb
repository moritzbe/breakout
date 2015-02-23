class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
    	t.belongs_to :team
    	t.integer :latitude
    	t.integer :longitude
    	t.integer :distance 
    	t.string :text
      t.timestamps null: false
    end
  end
end
