class Themes < ActiveRecord::Migration[6.0]
  def change
    create_table :themes do |t|
      t.string :title
      t.string :occasion
      t.string :url
      t.string :mood
      t.string :description
      t.timestamps
    end
  end
end
