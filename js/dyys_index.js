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
        $(".aside_menu .tab_series .tab").on("click", function () {
            $(".series_list").toggle("normal", function () {
                var flag = $(this).css("display");
                var btnObj = $(".tab_series .btn_open");
                if (flag == "block") {
                    var imgSrc = btnObj.data("retract");
                    btnObj.find("img").attr("src", imgSrc);
                } else if (flag == "none") {
                    var imgSrc = btnObj.data("open");
                    btnObj.find("img").attr("src", imgSrc);
                }
            })
        });
        // 侧边菜单关闭
        $(".aside_menu .btn_close .btn").on("click", function () {
            $(".aside_menu").hide("slow");
        });

    }());


    /* ******************************** */
    /* 联系我们-验证表单提交 */
    (function () {

        //function：验证姓名格式
        function isName(str) {
            var myReg = /^[u4e00-u9fa5·0-9A-z]+$/;
            return myReg.test(str);
        }
        //function：验证手机号格式
        function isTel(str) {
            var myReg = /^1[34578]\d{9}$/;
            return myReg.test(str);
        }
        //function：验证邮箱格式
        function isEmail(str) {
            var myReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return myReg.test(str);
        }
        $(".contact_main .btn_submit").on("click", function () {
            var value_1 = $(".message_area #nameInput").val().trim();
            var value_2 = $(".message_area #telInput").val().trim();
            var value_3 = $(".message_area #emailInput").val().trim();
            var value_4 = $(".message_area #msgInput").val().trim();
            console.log(value_1,value_2,value_3,value_4);
            if(value_1==""||value_2==""||value_3==""||value_4==""){
                layer.alert("请您完善必填项后再提交！");
            }else if(!isName(value_1)){
                layer.alert("您的姓名输入有误，请您重新输入！");
            }else if(!isTel(value_2)){
                layer.alert("您的手机号格式输入有误，请您重新输入！");
            }else if(!isEmail(value_3)){
                layer.alert("您的邮箱格式输入有误，请您重新输入！");
            }else{
                layer.msg("您的留言已反馈！")
                // 清空输入
                $(".message_area #nameInput").val("");
                $(".message_area #telInput").val("");
                $(".message_area #emailInput").val("");
                $(".message_area #msgInput").val("");
            }
        });

    }());
});