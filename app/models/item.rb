class Item < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  attachment :image

  with_options presence:true do
    validates :item_name
    validates :location
    validates :price
    validates :best_before_date
    validates :content
  end
end
