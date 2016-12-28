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
        	

        


angular.module('rulerApp').controller("jin", ["$scope","$http","$location","$cookieStore","$stateParams",function($scope,$http,$location,$cookieStore,$stateParams){
	var btns = angular.element('.button');
	
	$scope.btn = function(){

		var use=inputEmail3.value;
		var pwd=inputPassword3.value;
        
		console.log(use+pwd);
		$http({
			url:"http://47.90.20.200:1602/users/login",
			method: "post",
			data:{'username':use,'password':pwd}
		}).then(function(e){
			/*console.log(e.config.data.username)
			console.log(e.data.id);	*/
			
            $cookieStore.put('id',e.data.id)
            $cookieStore.put('username',e.config.data.username)
		   if(use == e.config.data.username && pwd == e.config.data.password){
		   /*	var ew = btn.style.left;
		     if( ew){*/
		     	 uid=e.data.uid;
	          $cookieStore.put('uid',uid);
		     $location.path('/gy');
		   /*  }*/
		   }else{
		 
		   }
		   
		/*    var checked = [];*/
		/*	if($scope.qq == true){
				console.log(1)
			}else{
				console.log(2)
			}*/
			
		
		}, function(e) {
			console.log('登录失败');

		});
	}

$scope.xiu = function(){
		
		var id = $cookieStore.get("uid");
		var musername = $cookieStore.get('username')
		//console.log(id)
		console.log(musername)
		$http({
			url:"http://surveytime.cn:1602/users/"+id,
			method: "put",
			data:{'username':musername,'password':$scope.password}
		}).then(function(e){
			console.log(e)
//			if(inputPassword3qq.value==inputPassword3q.value){
//			   
//			
//			}else{
//			
//			}
		},function(e){
			
		})
		
	}





}])
  
     
    
       
    




