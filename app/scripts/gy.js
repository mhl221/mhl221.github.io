angular.module('rulerApp').controller("gy", ["$scope","$http","$location","$cookieStore",function($scope,$http,$location,$cookieStore){

		$scope.tui = function(){
			$cookieStore.remove("username1");
			
		}
	
	
}])
	



