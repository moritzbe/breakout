class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
    	t.belongs_to :team
    	t.float :latitude
    	t.float :longitude
    	t.float :distance 
    	t.string :text
      t.timestamps null: false
    end
  end
end
