class AddIngredientLinesToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :ingredient_lines, :text, default: [], array: true
  end
end
