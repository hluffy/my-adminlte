$(function(){
	$("#name").focus();
});

function login(){
	var reg = /^\w{3,10}$/;
    var username = $("#name").val();
    var password = $("#pwd").val();
    if(!reg.test(username)){
        alert("请输入3到10位数字,字母或下划线")
        $("#name").val("");
        return;
    }
    if(!reg.test(password)){
        alert("请输入3到10位数字,字母或下划线")
        $("#pwd").val("");
        return;
    }

    $("#loginbutton").val("正在登录...");
    $("#loginbutton").attr("disabled","disabled");

    var url = "http://localhost:8080/login/login";
    //登錄
    $.ajax({
        type:"post",
        url:url,
        data:{"userName":username,"password":password},
        dataType:"json",
        success:function(data){
            console.log(data);
            window.location.href="http://localhost/my-adminlte/";
        },
        error:function(){
            alert("登录失败");
            $("#name").val("");
            $("#pwd").val("");
            $("#loginbutton").val("登录");
            $("#loginbutton").removeAttr("disabled");
        }
    });
}

$("#mybody").keyup(function(){
    if(event.keyCode == 13){
    	login();
    }
});
$("#loginbutton").click(function(){
	login();
});

