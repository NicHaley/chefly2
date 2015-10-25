class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :cook_time, :yield, :servings, :ingredient_lines
end
