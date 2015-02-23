class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
    	t.belongs_to :team
    	t.string :message
      t.timestamps null: false
    end
  end
end
