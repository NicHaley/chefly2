class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :cook_time, :yield, :servings, :ingredients

  def ingredients
    object.ingredients.map do |ingredient|
      IngredientSerializer.new(ingredient, scope: scope, root: false, event: object)
    end
  end

end
