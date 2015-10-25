class AddFieldsToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :name, :string
    add_column :blogs, :author, :string
    add_column :blogs, :url, :string
  end

end
