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
$('#btn-login').on('click',function(){
    const msg = {
        username:$("#username").val(),
        password:$("#password").val()
    }
    $.post("http://139.199.85.42:5000/admin/login",msg,function(data){
        windowTip(`${data["info"]}`)
    })
})