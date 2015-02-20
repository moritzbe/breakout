class CreateLogins < ActiveRecord::Migration
  def change
    	change_table(:teams, bulk: true) do |t|
    t.text :password_digest
    end
    end
  end
end
