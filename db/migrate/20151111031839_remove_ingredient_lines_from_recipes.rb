class RemoveIngredientLinesFromRecipes < ActiveRecord::Migration
  def change
  	remove_column :recipes, :ingredient_lines
  end
end
