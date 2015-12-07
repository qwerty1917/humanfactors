class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :order_detail
      t.boolean :is_it_done, :default => false
      t.boolean :is_it_valid, :default => true

      t.timestamps null: false
    end
  end
end