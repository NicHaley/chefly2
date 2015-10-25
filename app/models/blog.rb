class Blog < ActiveRecord::Base
  has_many :recipes
  has_many :images, as: :imageable
end
