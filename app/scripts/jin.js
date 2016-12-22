
		document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		window.onresize = function(){
			document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		};
	
     /*input  密码显示*/
   //点击多选框切换text和password的隐藏和显示
        function showHidePassword() {
            $("#text").toggle();
            $("#inputPassword3").toggle();
        }

        //text框失去焦点把text框的值赋值给password框
        function textBlur() {
            $("#inputPassword3").val($("#text").val());
}
        //password框失去焦点把password框的值赋值给text框
        function passwordBlur() {
            $("#text").val($("#inputPassword3").val());
        }
        	

var code ; //在全局 定义验证码
function createCode1(){ 
code = new Array();
var codeLength = 4;//验证码的长度
var checkCode = document.getElementById("checkCode");
checkCode.value = "";

var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');

for(var i=0;i<codeLength;i++) {
   var charIndex = Math.floor(Math.random()*32);
   code +=selectChar[charIndex];
}
if(code.length != codeLength){
   createCode1();
}
checkCode.value = code;
}

function validate () {
var inputCode1 = document.getElementById("input2").value.toUpperCase();

if(inputCode1.length <=0) {
   //alert("请输入验证码！");
   return false;
}
else if(inputCode1 == code ){
  // alert("成功！");
   a = 1;
   console.log(a)
   return true;
   
}
else {
 //  alert("验证码输入错误！");
   
createCode1();
   return false;
}
}



angular.module('rulerApp').controller("jin", ["$scope","$http","$location",function($scope,$http,$location) {
  $location.path('/yan');
	$scope.btn1 = function(){
		var use=inputEmail3.value;
		var pwd=inputPassword3.value;
		console.log(use+pwd);
		$http({
			url:"http://47.90.20.200:1602/users/login",//server/users/login/
			method: "post",
			data:{'username':use,'password':pwd}
		}).then(function(e){
			console.log(e);	 
          
		   if(use == e.config.data.username && pwd == e.config.data.password && a==1 ){
		     	 alert(1) 
		        $location.path('/yan');
		   }else{
		     //	alert(2)
		   }
		}, function(e) {
			console.log('登录失败');

		});
	}


}])
   

        
    
       
    




