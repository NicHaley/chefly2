class RecipesController < ApplicationController

  def index
  	@recipes = Recipe.all

    render json: @recipes
  end

  def show
  	 @recipe = Recipe.find(params[:id])
  end
end
