# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


b1 = Theme.create(
  :title => 'Birthday 1', 
  :occasion => 'birthday', 
  :url => "https://images.unsplash.com/photo-1464347601390-25e2842a37f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1985&q=80",
  :mood => 'happy'
)

b2 = Theme.create(
  :title => 'Birthday 2', 
  :occasion => 'birthday', 
  :url => "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  :mood => 'happy'
)

g1 = Theme.create(
  :title => 'Graduation 1', 
  :occasion => 'graduation', 
  :url => "https://images.unsplash.com/photo-1566125618135-8063e23d8e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  :mood => 'sentimental'
)

g2 = Theme.create(
  :title => 'Graduation 2', 
  :occasion => 'graduation', 
  :url => "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1650&q=80",
  :mood => 'sentimental'
)

f1 = Theme.create(
  :title => 'Farewell 1', 
  :occasion => 'farewell', 
  :url => "https://images.unsplash.com/photo-1529268209110-62be1d87fe75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  :mood => 'emotional'
)

f2 = Theme.create(
  :title => 'Farewell 2', 
  :occasion => 'farewell', 
  :url => "https://images.unsplash.com/photo-1549301019-6013533c514d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80",
  :mood => 'emotional'
)

f3 = Theme.create(
  :title => 'Farewell 3', 
  :occasion => 'farewell', 
  :url => "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  :mood => 'emotional'
)

