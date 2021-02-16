class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.references :user, foreign_key: true
      t.references :item, foreign_key: true
      t.string  :receiver
      t.text :content
      t.datetime :start_time
      t.timestamps
    end
  end
end
