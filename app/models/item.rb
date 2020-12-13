class Item < ApplicationRecord
  belongs_to :user
  attachment :image

  with_opstions presence:true do
    validates :item_name
    validates :location
    validates :price
    validates :best_before_date
    validates :content
  
  end
end
