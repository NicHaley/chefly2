class Recipe < ActiveRecord::Base
  has_and_belongs_to_many :ingredients
  belongs_to :blog
  has_many :images, as: :imageable
end
