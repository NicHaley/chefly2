class RecipesController < ApplicationController

  def index
  	@recipes = Recipe.last(10)

    render json: @recipes
  end

  def get_more_recipes
  	@more_recipes = Recipe.all

    render json: @more_recipes
  end

  def show
  	 @recipe = Recipe.find(params[:id])

  	 render json: @recipe
  end
end
