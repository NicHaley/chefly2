class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :cook_time, :yield, :servings
end
