class AddColsToMoments < ActiveRecord::Migration[6.0]
  def change
    add_column :moments, :card_url, :string
    add_column :moments, :occasion, :string
    add_column :moments, :music_url, :string
    add_column :moments, :description2, :string
    add_column :moments, :description3, :string
  end
end
