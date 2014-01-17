class AddLocationtoVisitors < ActiveRecord::Migration
  def change
  	add_column :visitors, :coordinates, :string
  	add_column :visitors, :city, :string
  end
end
