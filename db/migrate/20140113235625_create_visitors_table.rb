class CreateVisitorsTable < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.string :ip_address
      t.integer :pageviews
      t.text :referrer
      t.integer :numberofvisits
      t.string :device
      t.string :browser
      t.string :browserversion
      t.boolean :mobile

      t.timestamps
    end
  end
end
