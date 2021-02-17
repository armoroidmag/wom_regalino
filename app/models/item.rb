class Item < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :todos, dependent: :destroy
  attachment :image

  acts_as_taggable

  with_options presence:true do
    validates :item_name
    validates :location
    validates :price
    validates :best_before_date
    validates :content
  end

  def avg_score
    unless self.reviews.empty?
      reviews.average(:score).round(1).to_f
    else
      0.0
    end
  end

  def review_score_percentage
    unless self.reviews.empty?
      reviews.average(:score).round(1).to_f*100/5
    else
      0.0
    end
  end
end
