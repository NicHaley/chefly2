class RecipesController < ApplicationController

  def index
    if params[:query]

      ingredients_array = params[:query]

      @recipes = ingredients_array.inject([]) do |result,ingredient|
        recipe_with_ingredient = Recipe.ransack(ingredients_name_cont: ingredient).result(distinct: true)

        if !recipe_with_ingredient.empty?

          unless result.empty?
            result & recipe_with_ingredient
          else
            recipe_with_ingredient
          end

        end
      end

    else
  	  @recipes = Recipe.all
    end

    render json: @recipes
  end

  def get_more_recipes
  	@more_recipes = Recipe.all

    render json: @more_recipes
  end

  # def recipes_query
  #   @q = Recipe.ransack(ingredients_name_cont: params[:query])
  #   @recipes = @q.result(distinct: true)

  #   render json: @recipes
  # end

  def show
  	 @recipe = Recipe.find(params[:id])

  	 render json: @recipe
  end
end
