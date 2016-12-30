angular.module('rulerApp').controller("gy", ["$scope","$http","$location","$cookieStore",function($scope,$http,$location,$cookieStore){

		$scope.tui = function(){
			$cookieStore.remove("username1");
			
		}
	
	
}])
	


angular.module('rulerApp')
	.controller("gy",["$scope","$http","$cookieStore","$location",function($scope,$http,$cookieStore,$location){
	$scope.tan=function(){
		alert(1)
	}
}])

