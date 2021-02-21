class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def new
    @todo = Todo.new
  end

  def show
    @todo = Todo.find(params[:id])
  end

  def create
    @todo = Todo.create(todo_params)
      redirect_to todos_path, notice: '投稿しました'
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    redirect_to todos_path, notice:"削除しました"
  end

  def edit
    @todo = Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      redirect_to todos_path, notice: "編集しました"
    else
      render 'edit'
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:user_id, :item_id, :receiver, :content, :start_time)
  end
end
