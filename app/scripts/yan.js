angular.module('rulerApp')
.controller("yan", ["$scope", "$http","$location","$cookieStore",function($scope, $http,$location,$cookieStore) {
	
	alert(uid)
		$http({
			url:"http://47.90.20.200:1602/item",
			method: "get",
			params:{'uid':$cookieStore.get('uid')}
		}).then(function(e) {
			$scope.data = e.data;
   }, function() {})
	
$scope.del = function(index) {
			$scope.data.splice(index, 1)
		}
$scope.ck = function(index) {
	$location.path('/nie/' + index)
}

}])
