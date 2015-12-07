class AppController < ApplicationController
  def index
  end

  def admin
    @all_order_list = Order.all
  end

  def client
    @all_order_list = Order.all
  end
  
  def input_order
    new_order = Order.new
    new_order.order_detail = params[:order_detail]
    new_order.save
    
    redirect_to action: "admin"
  end
  
  def delete_order
    @id_to_del = params[:id]
    Order.destroy(@id_to_del)
    
    redirect_to action: "admin"
  end
  
  def finish_order
    order_to_fin = Order.find(params[:id])
    order_to_fin.is_it_done = true
    order_to_fin.save
    
    # redirect_to action: "admin"
    render :text => ""
  end
  
  def unfinish_order
    order_to_fin = Order.find(params[:id])
    order_to_fin.is_it_done = false
    order_to_fin.save
    
    render :text => ""
  end
end
