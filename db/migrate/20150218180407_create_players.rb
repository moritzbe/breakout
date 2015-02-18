class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
    t.belongs_to :teams
	t.string :prename
	t.string :surname
	t.integer :age
	t.string :email
	t.integer :phone
    t.timestamps null: false
    end
  end
end
