class ReviewsController < ApplicationController
  before_action :authenticate_user!, except: [:create]
  def index
    @item = Item.find(params[:item_id])
    @reviews = @item.reviews
  end

  def create
    @item = Item.find(params[:item_id])
    # 投稿に紐づいたレビューを作成
    @review = @item.reviews.build(review_params)
    @review.user_id = current_user.id
    if @review.save
      redirect_to "item/show"
    else
      @item = Item.find(params[:item_id])
      render "item/show"
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :index
  end


  private
  def review_params
    params.require(:review).permit(:item_id, :score, :content)
  end
end
