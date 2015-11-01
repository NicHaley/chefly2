class RecipesController < ApplicationController

  def index
  	@recipes = Recipe.last(10)

    render json: @recipes
  end

  def show
  	 @recipe = Recipe.find(params[:id])

  	 render json: @recipe
  end
end
