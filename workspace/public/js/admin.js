$(document).ready(function(){
    // $(".btn.btn-success.orderFinish").click(function(){
    $(this).on("click", ".btn.btn-success.orderFinish", function(){

        // 서열 id
        var order_id = $(this).parent().parent().children(".order_id").text();
        var $now = $(this);
        
        // AJAX
        $.ajax({
            url: "/app/finish_order",
            data: {
                id: order_id
            },
            success: function(data){
                // 서열 라인 배경색 바꿈
                $now.parent().parent().addClass("list-group-item-success");
                
                // 버튼 변경
                $now.removeClass("orderFinish")
                $now.removeClass("btn-success")
                $now.addClass("btn-warning")
                $now.addClass("orderUnFinish")
                $now.text("retrive to not finished");
            }
        });
    });
    
    $(this).on("click", ".btn.btn-warning.orderUnFinish", function(){
        
        // 서열 id
        var order_id = $(this).parent().parent().children(".order_id").text();
        var $now = $(this);
        
        // AJAX
        $.ajax({
            url: "/app/unfinish_order",
            data: {
                id: order_id
            },
            success: function(data){
                // 서열 라인 배경색 바꿈
                $now.parent().parent().removeClass("list-group-item-success");
                
                // 버튼 변경
                $now.removeClass("orderUnFinish")
                $now.removeClass("btn-warning")
                $now.addClass("btn-success")
                $now.addClass("orderFinish")
                $now.text("finish");
            }
        });
    });
    
    $(".btn.btn-danger.orderDel").click(function(){
        // alert("test");
    });
});