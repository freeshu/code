$(function(){
    $(".middle li").mouseover(function(){
        $(this).css("box-shadow","0px 0px 10px 5px #ccc");
    });
    $(".middle li").mouseout(function(){
        $(this).css("box-shadow","none"); 
    });
    $(".li_bottom li").mouseover(function(){
        $(this).css("box-shadow","0px 0px 10px 5px #ccc");
    });
    $(".li_bottom li").mouseout(function(){
        $(this).css("box-shadow","none"); 
    });
    // 目录
    $(".nav_left li:lt(2)").mouseover(function(){
        $(this).css("background","#0c8ed9");
    });
    $(".nav_left li:lt(2)").mouseout(function(){
        $(this).css("background","none");
    });
    // 目录更多,nav_more嵌套在#posit里，是#posit的一部分，在下拉单里移出相当于#posit移除。
    $("#posit").mouseover(function(){
        $(this).css("background","#0c8ed9");
        $(this).find("em").css("background","url(../img/arrow_down.png");
        $(".nav_more").css("display","block");  
    });
    $(".nav_more li").mouseover(function(){
        $(this).css("background","#2d343e");
    });
    $(".nav_more li").mouseout(function(){
        $(this).css("background","#0a0a0a");
    });   
    $("#posit").mouseout(function(){
        $(this).css("background","#27283c");
        $(this).find("em").css("background","url(../img/arrow_up.png");
        $(".nav_more").css("display","none");
    });
    // 目录右边
    $(".nav_right li:eq(0) a").mouseover(function(){
        $(this).parent().css("background","url(../img/music_1-2.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(0) a").mouseout(function(){
        $(this).parent().css("background","url(../img/music_1.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(1) a").mouseover(function(){
        $(this).parent().css("background","url(../img/music_2-2.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(1) a").mouseout(function(){
        $(this).parent().css("background","url(../img/music_2.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(2) a").mouseover(function(){
        $(this).parent().css("background","url(../img/music_3-2.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(2) a").mouseout(function(){
        $(this).parent().css("background","url(../img/music_3.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(3) a").mouseover(function(){
        $(this).parent().css("background","url(../img/music_4-2.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(3) a").mouseout(function(){
        $(this).parent().css("background","url(../img/music_4.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(4) a").mouseover(function(){
        $(this).parent().css("background","url(../img/music_5-2.png) no-repeat 30px 23px");
    });
    $(".nav_right li:eq(4) a").mouseout(function(){
        $(this).parent().css("background","url(../img/music_5.png) no-repeat 30px 23px");
    });
    // 登录注册
    $(".login").hover(function(){$(this).parent().css("background","#407ead")},function(){$(this).parent().css("background","#169af3");});
    $(".register").hover(function(){
        $(this).parent().css("border","1px solid #169af3");
    },function(){
        $(this).parent().css("border","1px solid #dbdbdb");
    });
})
