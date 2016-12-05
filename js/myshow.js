/* 
* @Author: kaiye
* @Date:   2016-10-28 03:53:42
* @Last Modified by:   kaiye
* @Last Modified time: 2016-10-28 04:14:09
*/

$(document).ready(function(){
    var nowimg=0;
    var $imgs=$(".banner li img")
    var $coverDivs=$(".cover div")
    $(".circle a").click(function() {
        if(!$coverDivs.is(":animated")){
            nowimg=$(this).index();
            // if(nowimg>4){
            //     nowimg=0
            // }
            $coverDivs.css("background-image","url("+$imgs.eq(nowimg).attr("src")+")")
            $coverDivs.animate({"width":97}, 1000,function(){
                $(".banner li").eq(nowimg).addClass('cur').siblings().removeClass("cur")
                $(this).css("width",0) 
            })
        }
    });
});