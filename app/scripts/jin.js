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
	var jb=angular.element(".jb-jizhu")
	if($cookieStore.get("username1")){
		$scope.inputTel11 = $cookieStore.get("username1")
		$scope.mima = $cookieStore.get("password")
		jb.attr("index","true")
		  	$scope.jinbo=true
	}
	$scope.jizhu=function(){
		
		  if(jb.attr("index")=="false"){
		  	jb.attr("index","true")
		  	$scope.jinbo=true
		  	
		  }else{
		  	jb.attr("index","false")
		  	$scope.jinbo=false
		  }
	}
	$scope.jizhu1=function(){
		
		  if(jb.attr("index")=="false"){
		  	jb.attr("index","true")
		  	$scope.jinbo=true
		  	
		  }else{
		  	jb.attr("index","false")
		  	$scope.jinbo=false
		  }
	}
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
			console.log(e)
            $cookieStore.put('id',e.data.id)
            $cookieStore.put('username',e.config.data.username)
		   
		   	   
		     	 uid=e.data.uid;
		     	// console.log(uid)
		         $cookieStore.put('uid',uid);
			     $location.path('/gy');
			  
          
          if(jb.attr("index")=="true"){
          	$cookieStore.put('password',e.config.data.password)
            $cookieStore.put('username1',e.config.data.username)
            
           // alert()
          }else{
          	$cookieStore.remove("password")
          	$cookieStore.remove("username1")
          }

		},function(e) {
			console.log('登录失败');
            $scope.isShow = true;  
		});
	}

$scope.xiu = function(){
		
		var wuid = $cookieStore.get("uid");
		var musername = $cookieStore.get('username')
		//console.log(wuid)
		console.log(musername)
		$http({
			url:"http://47.90.20.200:1602/users",
			method: "post",
			data:{'username':musername,'password':$scope.password}
		}).then(function(e){
			console.log(e)
//			if(inputPassword3qq.value==inputPassword3q.value){
          //  console.log($cookieStore.get('password'))
			
		
	/*		  $cookieStore.remove("userName");
			  var	 passw = e.config.data.password;
			  console.log(e.config.data.password)
			  console.log($cookieStore.get('password'))
			   $cookieStore.put('username',musername);
			   $cookieStore.put('password',passw);*/
		                    
//			}else{
//			   
//			}
		},function(e){
			
		})
		
	}





}])
  
     
    
       
    




