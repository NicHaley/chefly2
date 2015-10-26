# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  Recipe.create(
    name: Faker::Lorem.words.join(' '),
    ingredient_lines: Faker::Lorem.words(rand(5)),
    servings: "Serves: 1 - #{(1 + rand(4))}",
    cook_time: "#{rand(180)} minutes",
    yield: "#{rand(6)} servings"
  )
end