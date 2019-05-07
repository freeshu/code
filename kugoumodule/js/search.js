$(function(){
    // 验证男女
    function checksex(){
        if(!($('.li_first input').is(':checked'))){
            alert("1、您的性别？” 为必答题，请作答哦~");
            return false;
        }else{
            return true;
        }
    };
    // 验证年龄
    function checkage(){
        if(!($('.li_two option:not(:first)').is(':checked'))){
            alert("2、您的年龄？” 为必答题，请作答哦~");
            return false;
        }else{
            return true;
        }
    };
    // 验证学历
    function checksel(){
        if(!($('.li_three input').is(':checked'))){
            alert("3、您的学历？” 为必答题，请作答哦~");
            return false;
        }else{
            return true;
        }
    };
    // 验证职业
    function checkop(){
        if(!($('.li_four input').is(':checked'))){
            alert("4、您的职业？” 为必答题，请作答哦~");
            return false;
        }else{
            return true;
        }
    };
    // 验证手机系统
    function checkphone(){
        if(!($('.li_five input').is(':checked'))){
            alert("5、您的手机是什么系统？（多部手机按最常使用的回答）” 为必答题，请作答哦~");
            return false;
        }else{
            return true;
        }
    }
    // 验证电脑酷狗使用频率
    // each循环遍历元素function，如果直接return true/false传给的是each表示继续continue和跳出break，所以在循环外加个flag记下状态，而如果flag以认为false的话，并且在return true之前flag=true，在else时return true直接结束本次循环，并开始下一次，而下一个input未点击而此时flag的判断就是true会在第二次判断checked时跳转submit，而如果把flag=true写在return true之后就可以一个个判断因为return完了根本不会执行flag=true，所以可以先假定flag=true，如果未点击则为false，如果点击了就结束本次并继续循环。最后判断下flag此时的return才是函数checkpc的返回
    function checkpc(){
        var flag=true;
        $(".li_six tr:not(:first)").each(function(){
            if(!($(this).children().children().is(':checked'))){
                alert("6、您在电脑上，使用以下产品和观看MV的频率是？”中的小题"+$(this).index()+"为必答题，请作答哦~");
                // 跳出本次循环
                flag=false;
                return false;
            }else{
                // 结束本次循环并继续
                return true;
            }
        });
       
        if(!flag){
            return false;
        }else{
            return true;
        }
    }
    // 验证客户端
    function checkmu_pc(){
        var flag=true;
        $(".li_seven tr:not(:first)").each(function(){
            if(!($(this).children().children().is(':checked'))){
                alert("7、您在手机上，使用以下产品和观看MV的频率是？”中的小题"+$(this).index()+"为必答题，请作答哦~");
                flag=false;
                return false;
            }else{
                return true;
            }
        });
    
        if(!flag){
            return false;
        }else{
            return true;
        }
    };
    // 验证手机客户端
    // 是否跳转form
    $("form").submit(function(){
        if(!(checksex())||!(checkage())||!(checksel())||!(checkop())||!(checkphone())||!(checkpc())||!(checkmu_pc())){
            return false;
        }else{
            return true;
        }
    });
    console.log($(".li_seven tr:not(:first)"));
    // console.log($(".li_six tr:not(:first)").children().children());
});