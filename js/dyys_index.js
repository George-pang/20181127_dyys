/* 入口函数 */
$(function () {

    /* ********************************* */
    /* 侧边菜单栏功能代码 */
    (function () {
        // 侧边菜单显示
        $(".btn_menu").on("click", function () {
            $(".aside_menu").show("slow");
        });
        // 产品系列子菜单的显示隐藏
        $(".aside_menu .tab_series .tab").on("click",function(){
            $(".series_list").toggle("normal",function(){
                var flag=$(this).css("display");
                var btnObj=$(".tab_series .btn_open");
                if(flag=="block"){
                    var imgSrc=btnObj.data("retract");
                    btnObj.find("img").attr("src",imgSrc);
                }else if(flag=="none"){
                    var imgSrc=btnObj.data("open");
                    btnObj.find("img").attr("src",imgSrc);
                }
            })
        });
        // 侧边菜单关闭
        $(".aside_menu .btn_close .btn").on("click",function(){
            $(".aside_menu").hide("slow");
        });

    }());

});