class AddImageUrlsColumnToRecipes < ActiveRecord::Migration
  def change
  	add_column :recipes, :image_urls, :text, default: [], array: true
  end
end
