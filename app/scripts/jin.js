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
        	

        


angular.module('rulerApp').controller("jin", ["$scope","$http","$location","$cookieStore",function($scope,$http,$location,$cookieStore){
	
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
		  
	          $cookieStore.put('uid',uid);
		     $location.path('/gy');
		   }else{
		 
		   }
		   
		    var checked = [];
			if($scope.qq == true){
				console.log(1)
			

			}else{
				console.log(2)
			}
		}, function(e) {
			console.log('登录失败');

		});
	}


}])
  
     
    
       
    




