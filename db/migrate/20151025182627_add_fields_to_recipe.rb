class AddFieldsToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :name, :string
    add_column :recipes, :image_url, :string
    add_column :recipes, :source_display_name, :string
    add_column :recipes, :source_site_url, :string
    add_column :recipes, :source_url, :string
    add_column :recipes, :cook_time, :string
    add_column :recipes, :yield, :string
    add_column :recipes, :servings, :string
    add_column :recipes, :ingredient_lines, :text, default: [], array: true
  end
end
