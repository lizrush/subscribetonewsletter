class Adddefaulttopageviews < ActiveRecord::Migration
  def change
    change_column :visitors, :pageviews, :integer, :default => 0    
  end
end
