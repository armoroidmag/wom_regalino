class ItemsController < ApplicationController
  before_action :authenticate_user!, except: [:index,:show]
  def index
    @items = Item.all
    
  end

  def show
    @item = Item.find(params[:id])
    @review = Review.new
    @reviews = @item.reviews
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.create(item_params)
    @item.user_id = current_user.id
    if @item.save
      @items = Item.order(created_at: :desc).limit(8)
      redirect_to items_path(@item), notice: '投稿しました'
    else
      render :new
    end
  end

  def edit
    @item = Item.find(params[:id])
    if @item.user != current_user
      redirect_to items_path, alert:'不正なアクセスです'
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      redirect_to item_path(@item), notice: '更新しました'
    else
      render :edit
    end
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy
    redirect_to items_path
  end

  private
  def item_params
    params.require(:item).permit(:item_name, :location, :price, :best_before_date, :content, :image)
  end
end

