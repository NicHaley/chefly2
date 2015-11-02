class BlogsController < ApplicationController
  def index
  	@blogs = Blog.all

    render json: @blogs
  end

  def show
  	 @blog = Blog.find(params[:id])

  	 render json: @blog
  end
end
