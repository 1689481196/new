$(function(){
    $("#toggle").click(function(){
        var  menus=$("#menus").css('display');
        if(menus=="none"){
            $("#menus").css('display','block');
            $("#search").css('display','none');
            $("#je").css('display','none');
            $("#search_body").css('display','none');
            $(".hy-nav").height(($("#menus").height()+65)+"px");
        }else {
            $("#menus").css('display','none');
            $(".hy-nav").height('49px');
        }
    })
    $("#search").click(function(){

        var exe_value=$("#search_body").css('display');
        if(exe_value=="none"){
            $("#menus").css('display','none');
            $("#search_body").css('display','block');
            $(".hy-nav").height(($("#search_body").height()+50)+"px");
        }else {
            $("#search_body").css('display','none');
            $(".hy-nav").height('49px');
        }
    });
});