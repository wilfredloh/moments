# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


b1 = Theme.create(
  :title => 'Birthday', 
  :occasion => 'birthday', 
  :url => "https://images-na.ssl-images-amazon.com/images/I/81HuZ7FzChL._SY500_.jpg",
  :mood => 'happy'
)

g1 = Theme.create(
  :title => 'Graduation', 
  :occasion => 'graduation', 
  :url => "https://cardthartic.com/wp-content/uploads/2018/01/1314_Outside.jpg",
  :mood => 'sentimental'
)

f1 = Theme.create(
  :title => 'Farewell', 
  :occasion => 'farewell', 
  :url => "https://rlv.zcache.com.au/funny_goodbye_card_rude_farewell_card_funny_card-r366cfdc64eb8438f9249b6ded4723fd1_em0cq_540.jpg",
  :mood => 'emotional'
)