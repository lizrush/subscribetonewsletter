class AddLocationtoVisitors < ActiveRecord::Migration
  def change
  	add_column :visitors, :city, :string
  	add_column :visitors, :latitude, :string
  	add_column :visitors, :longitude, :string

  end
end
