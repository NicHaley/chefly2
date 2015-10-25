class AddFieldsToIngredient < ActiveRecord::Migration
  def change
    add_column :ingredients, :name, :string
    add_reference :ingredients, :recipe, index: true
  end

end
