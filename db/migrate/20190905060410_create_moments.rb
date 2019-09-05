class CreateMoments < ActiveRecord::Migration[6.0]
  def change
    create_table :moments do |t|
      t.string :title
      t.string :to_name
      t.string :from_name
      t.string :description
      t.string :image_url
      t.string :audio_url

      t.timestamps
    end
  end
end
