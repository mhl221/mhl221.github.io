
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
        	
 //  记住密码功能
 
 //初始化页面时验证是否记住了密码 
/*$(document).ready(function(){ 	
	if ($.cookie("#jizhu") == "true") { 
		$("#jizhu").attr("checked", true); 
		$("#inputEmail3").val($.cookie("userName")); 
		$("#inputPassword3").val($.cookie("passWord")); 
	} 
 
//保存用户信息 


if ($("#jizhu").attr("checked") == true) { 
	var userName = $("#inputEmail3").val(); 
	var passWord = $("#inputPassword3").val(); 
	$.cookie("jizhu", "true", { expires: 7 }); // 存储一个带7天期限的 cookie 
	$.cookie("inputEmail3", userName, { expires: 7 }); // 存储一个带7天期限的 cookie 
	$.cookie("inputPassword3", passWord, { expires: 7 }); // 存储一个带7天期限的 cookie 
} 
else { 
	$.cookie("jizhu", "false", { expires: -1 }); 
	$.cookie("inputEmail3", '', { expires: -1 }); 
	$.cookie("inputPassword3", '', { expires: -1 }); 
} 
 

 }); */ 



angular.module('rulerApp').controller("jin", ["$scope","$http","$location","$cookieStore",function($scope,$http,$location,$cookieStore) {
     
   

   
	$scope.btn = function(){
		var use=inputEmail3.value;
		var pwd=inputPassword3.value;
		console.log(use+pwd);
		
		 
			
	
		
		
		$http({
			url:"http://47.90.20.200:1602/users/login",
			method: "post",
			data:{'username':use,'password':pwd}
		}).then(function(e){
			console.log(e);	 
            
		   if(use == e.config.data.username && pwd == e.config.data.password ){
		      uid=e.data.uid;
	          $cookieStore.put('uid',uid);
		     $location.path('/gy');
		   }else{
		 
		   }
		   
		    var checked = [];
			if($scope.qq == true){
				console.log(1)
			checked.push('red');
		/*	var expireDate = new Date();
			expireDate.setDate(expireDate.getDate() + 7);
			
			var user={
			username:encryptionStr("admin"),
			password:encryptionStr('123456')
			}
			*/
			

			}else{
				console.log(2)
			}
		}, function(e) {
			console.log('登录失败');

		});
	}


}])
  
     
    
       
    




