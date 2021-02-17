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
    Todo.create(todo_parameter)
    redirect_to todos_path
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
    if @todo.update(todo_parameter)
      redirect_to todos_path, notice: "編集しました"
    else
      render 'edit'
    end
  end

  private
  def 

  def todo_parameter
    params.require(:todo).permit(:user, :item, :receiver, :content, :start_time)
  end
end
