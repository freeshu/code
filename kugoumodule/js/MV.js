$(function(){
    // 目录
    $(".nav_left li").mouseover(function(){
        $(this).css("background","#0c8ed9");
    });
    $(".nav_left li").mouseout(function(){
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
    // 轮播图
    var ul=$(".box ul");
    var no=0;
    var dis=0;
    function inbo(){
        no=setInterval(function(){
            if(dis%-663==0){
                clearInterval(no);
                no=setTimeout(inbo,2000);
            }
            if(dis<=-3978){
                dis=0;
            }
            ul.css("margin-left",""+dis+"px");
            // 减663的约数，否则减再多不能除以663的整数就不会停
            dis-=51;
            var index=Math.floor(dis/-663);
            if(index==6){
                index=0;
            }
            changeStyle(index);
          
            // 因为在setInterval中是一直循环的，而mouseenter和mouseleave是触发时才启动，但是setInterval每循环一次就绑定一次mouseenter和mouseleave，而真正鼠标移进移出时就会全触发，所以要在触发之前清一下mouseenter和mouseleave事件。
            $(".box ul li").unbind("mouseenter");
            $(".box ul li").mouseenter(function(){
                var ind=$(this).index();
                $(this).parent().css("margin-left",""+ind*(-663)+"px");
                clearInterval(no);
            });
            $(".box ul li").unbind("mouseleave");
            $(".box ul li").mouseleave(function(){
                inbo();
            });
            $(".spa span").unbind("mouseenter");
            $(".spa span").mouseenter(function(){
                var inde=$(this).index();
                $(".box ul").css("margin-left",""+inde*(-663)+"px");
                clearInterval(no);
                changeStyle(inde);
                // span的mouseenter是随机指导哪个span，如果停在span上dis还会继续从他本身开始走并不会从span位置走，所以此时要让dis从span位置开始走，span位置就是本身的index()*一张图片的宽度。当然dis值得增加也可以放在mouseleave里，离开才dis重新赋值，在mouseenter里dis=inde*(-663)时会有点慢，离开后还要在当前图片和span停留2s，如果dis=(inde+1)*(-663)离开后立即执行本身的下一张图，下一张图停留2s再次下一张图，开始循环。
                dis=inde*(-663);
            });
            $(".spa span").unbind("mouseleave");
            $(".spa span").mouseleave(function(){
                inbo();
            });
        },20);
    }
    inbo();
    function changeStyle(index){
        $(".spa span").each(function(){
            if($(this).index()==index){
                $(this).addClass("box_span");
            }else{
                $(this).removeClass("box_span");
            }
        });
    }
    // 轮播图结束
    
    $(".main_right ul li").hover(function(){
        $(this).css("background","#959595");
        $(this).find("i").css("width","18px");
        // 先前给ul加了大背景图，不用一个个加数字背景，放了em在数字区域占位，鼠标移进去之后改em背景图就行。移出去时也不要直接改背景颜色或图，会覆盖，background:none，记下index下标，移到哪个li，就哪个li的下标*29（li的行距）+218（顶部距离图片顶部距离）作为水密图向上移动的距离。动态
        var i=$(this).index()*29;
        $(this).find("em").css("background","url(../img/MV/bg.png) no-repeat -296px -"+(i+218)+"px");
    },function(){
        $(this).css("background","none");
        $(this).find("i").css("width","0");
        $(this).find("em").css("background","none");
    });
    // 排行榜结束
//	$(".mv_left ul li").mouseover(function(){
//		$(this).addClass("mv_li");
//	});
//	$(".mv_left ul li").mouseout(function(){
//		$(this).removeClass("mv_li");
//	});

});
$(function(){
	   $.ajax({
        url:"../json/settings.json",
        type:"get",
        dataType:"json",
        async:true,
        success:function(data){
        	da=data["result"];
            var ul=$(".mv_right ul");
            for(var i=1;i<da.length;i++){
            	var li=$("<li class='mv_bottom'></li");
            	li.html(`<a href="`+da[i].address+`" traget="_blank">
                            <img src="`+da[i].imgaddress+`" title="`+da[i].name+`"/>
                            <em></em>
                        </a>
                        <span>`+da[i].name+`</span>`);
            	ul.append(li);
            	if(i%5==0){
            		li.css("margin-right","0px");
            	}
            }

        	var ar=["result","arr","music","ment","grou"];
//      	如果已经有了点击事件，又加了hover事件，hover会盖过click里加的样式（冲突，虽然点击获得的ajax可以获取到，但是.hover()所产生的样式会覆盖前面click加的样式），所以hover的样式要加在css文件里（:hover），这样在js文件里写时候click才起作用，因为已经给第一个li加了mv_liclass样式，在点击式只是加、删class，与css里写的：hover样式不冲突。就能在页面加载时第一个li是蓝色，且在鼠标移进移除时hover样式，并且不会改变click加的样式
        	$("#mv .mv_left ul li").click(function(){
        			$(this).addClass("mv_li");
        			$(this).siblings().removeClass("mv_li");
        			$(".mv_right ul").html("");
        			var sum=ar[$(this).index()-1];
        			dat=data[""+sum+""];
            		var ul=$(".mv_right ul");
            		for(var i=1;i<dat.length;i++){
            			var li=$("<li class='mv_bottom'></li");
            			li.html(`<a href="`+dat[i].address+`" traget="_blank">
                            <img src="`+dat[i].imgaddress+`" title="`+dat[i].name+`"/>
                            <em></em>
                        </a>
                        <span>`+dat[i].name+`</span>`);
            			ul.append(li);
            			if(i%5==0){
            				li.css("margin-right","0px");
            			}
            		}
        	});
            
        },
        error:function(mess){
            console.log(mess);
        }
    });
});
