function windowTip(msg){
    const tip = `<div class = "tip">${msg}</div>`
    $("body").append(tip);
    setTimeout(function(){
        $("body .tip").remove();
    },1000)
}
function testValue(name,tip){
    $(`${name}`).on('blur',function(){
        if(!$(this).val()){
            windowTip(tip)
        }
    })
}
testValue("#username","请输入用户名")
testValue("#password","请输入密码")
testValue("#phone","请输入手机号码")
$("#register-btn").on('click',function(){
    const msg = {
        username:$("#username").val(),
        password:$("#password").val(),
        phone:$("#phone").val(),
        type:$('type').val()
    }
    if($("#email").val()){
        msg.email = $("#email").val();
    }
    $.post("http://139.199.85.42:5000/user/register",msg,function(data){
        console.log(data)
        windowTip(`${data["info"]}`)
    })
})