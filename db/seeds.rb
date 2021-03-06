# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ingredients = ["Chicken", "Beef", "Spinach", "Mushrooms", "Pasta", "Tomato", "Carrot", "Onion"]

ingredients.each do |ingredient|
  Ingredient.create(
    name: ingredient
  )
end

20.times do
  recipe = Recipe.create(
    name: Faker::Lorem.words.join(' '),
    servings: "Serves: 1 - #{(1 + rand(4))}",
    cook_time: "#{rand(180)} minutes",
    yield: "#{rand(6)} servings",
    ingredient_lines: [],
    image_urls: [],
  )
  rand(1..5).times do
    recipe.image_urls << Faker::Avatar.image
    recipe.save
  end

  4.times do
    offset = rand(Ingredient.count)
    recipe.ingredients << Ingredient.offset(offset).first
  end
end


10.times do
  Blog.create(
    name: Faker::Lorem.words.join(' ')
  )
end