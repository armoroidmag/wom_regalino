class ReviewsController < ApplicationController
  before_action :authenticate_user!, except: [:create]
  def index
    @item = Item.find(params[:item_id])
    @reviews = @item.reviews
  end

  def create
    @item = Item.find(params[:item_id])
    # 投稿に紐づいたレビューを作成
    @review = Review.new(review_params)
    # @reviews = @item.reviews.build(review_params)
    @review.user_id = current_user.id
    @reviews = @item.reviews
    if @review.save
      flash[:notice] = 'レビューを投稿しました。'
      redirect_to item_path(@review.item)
    else
      @item = Item.find(params[:item_id])
      flash.now[:alert] = '入力に不備があります。'
      # @item = Item.find(params[:id])
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
