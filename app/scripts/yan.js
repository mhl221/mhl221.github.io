angular.module('rulerApp')
.controller("yan", ["$scope", "$http","$location", function($scope, $http,$location) {
	alert(uid)
	//	$http({
	//		url:"http://47.90.20.200:1602/users/login",
	//		method: "post",
	//		data:{username:'username',password:'password'}
	//	}).then(function(e) {
	//		console.log(e)
	//}, function() {})
	$scope.data = [{
				img:"img/bj_0.jpg"
				,txt:"1111111"
//				,mname:"btn"
			}
			,{
				img:"img/bj_1.jpg"
				,txt:"2222222"
//				,mname:"btn1"
			}
			,{
				img:"img/bj_2.jpg"
				,txt:"00000"
//				,mname:"btn2"
			},{
				img:"img/bj_0.jpg"
				,txt:"3333333"
//				,mname:"btn2"
			},{
				img:"img/bj_1.jpg"
				,txt:"444444"
//				,mname:"btn2"
			}]

$scope.del = function(index) {
			$scope.data.splice(index, 1)
		}
$scope.ck = function(index) {
	$location.path('/nie/' + index)
}

}])
