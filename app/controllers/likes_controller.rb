class LikesController < ApplicationController
  before_action :item_params
  def create
    like = current_user.likes.new(item_id: @item.id)
    # @like.new(user_id: current_user.id,  item_id: @item.id)
    like.save
    # redirect_back(fallback_location: root_path)
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, item_id: @item.id).destroy
    # redirect_back(fallback_location: root_path)
  end

  private 
  def item_params
    @item = Item.find(params[:item_id])
  end
end
