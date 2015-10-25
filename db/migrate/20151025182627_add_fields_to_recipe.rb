class AddFieldsToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :name, :string
    add_column :recipes, :recipe_path, :string
    add_column :recipes, :image_url, :string
    add_column :recipes, :cook_time, :string
    add_column :recipes, :yield, :string
    add_column :recipes, :servings, :string
    add_column :recipes, :ingredient_lines, :text, default: [], array: true
    add_reference :recipes, :ingredient, index: true
    add_reference :recipes, :blog, index: true
  end

end
