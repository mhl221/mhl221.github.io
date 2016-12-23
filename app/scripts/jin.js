
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
        	




angular.module('rulerApp').controller("jin", ["$scope","$http","$location",function($scope,$http,$location) {
     
	$scope.btn = function(){
		var use=inputEmail3.value;
		var pwd=inputPassword3.value;
		console.log(use+pwd);
		$http({
			url:url+"users/login",
			method: "post",
			data:{'username':use,'password':pwd}
		}).then(function(e){
			console.log(e);	 
           
		   if(use == e.config.data.username && pwd == e.config.data.password ){
		      uid=e.data.uid;
	          
		   $location.path('/gy');
		   }else{
		 
		   }
		}, function(e) {
			console.log('登录失败');

		});
	}


}])
   

        
    
       
    




