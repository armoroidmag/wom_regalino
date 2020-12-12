class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.string :item_name
      t.string :image_id
      t.string :location
      t.string :price
      t.text :content
      t.string :best_before_date

      t.timestamps
    end
  end
end
