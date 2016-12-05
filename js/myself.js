/* 
* @Author: kaiye
* @Date:   2016-10-22 18:09:57
* @Last Modified by:   kaiye
* @Last Modified time: 2016-11-18 16:15:29
*/

$(document).ready(function(){
    var nowpage=0;
    var lock=true;
    $(".box>li").eq(nowpage).removeClass('out').siblings().addClass('out')
    $(document).mousewheel(function(e,d){
        if(lock==true){
            nowpage=nowpage-d;
            if(nowpage>5){nowpage=5}
            if(nowpage<0){nowpage=0}
            $(".box").animate({"top":nowpage*-100+"%"}, 1000)
            lock=false;
        }
        setTimeout(function(){
             lock=true;
        }, 1200) 
        $(".box>li").eq(nowpage).removeClass('out').siblings().addClass('out')
        $(".littlecircle span").eq(nowpage).addClass('current').siblings().removeClass('current') 
    })
    $(".circle span").click(function() {
        nowpage=$(this).index();
        $(".box").animate({"top":nowpage*-100+"%"}, 1000)
        $(".littlecircle span").eq(nowpage).addClass('current').siblings().removeClass('current')
        $(".box>li").eq(nowpage).removeClass('out').siblings().addClass('out') 
    });

    // page6控制动画
    $(".page6 button:eq(0)").on("click", function () {
        $(".grade").css("opacity",0);
        $(".page6>div").each(function (i, elem) {
//                "rgb(123,45,67)"
            $(elem).css("backgroundColor", rgbRandom()).delay(100 * i).animate({
                width: "74.4%"
            }, 1000).animate({
                width: 100
            }, 1000).animate({
                width: "74.4%"
            }, 1000).animate({
                width: test(i)
            }, 1000);
        });
        setTimeout(function(){
              $(".grade").css("opacity",1);
        }, 5000) 
       
    });
    function rgbRandom() {
        var red = parseInt(Math.random() * 255);
        var yellow = parseInt(Math.random() * 255);
        var blue = parseInt(Math.random() * 255);
        return "rgb("+red+","+yellow+","+blue+")";
    }

    function test(m) {
        if(m== 0) {
            return "45%";
        }else if(m==1){
            return "63.75%";
        }else if(m==4){
            return "63.75%";
        }else {
            return "60%";
        }
    }

    // 文字滚动
    var nowNew = 0;
    var lis = $(".page1 ul li")
    var setTimer = 1000
    // $(".ul li:first").clone().appendTo('.ul')
    var timer;
  // alert(lis.length);
  // $("button").onclick(rightBtn())

    function rightBtn() {
        if (!$(".ul").is(":animated")) {
            if (nowNew < lis.length-1 ) {
                nowNew++
                $(".ul").animate({
                    "top": nowNew * -30
                }, 1000)
            } else {
                nowNew = 0;
                // alert(lis.length);
                $(".ul").animate({
                    "top": lis.length * -30
                }, 1000, function() {
                    $(".ul").css("top", 0)
                });
            }
        }
    }
  timer = setInterval(rightBtn, setTimer);

});