'use strict';
/**
 * @ngdoc function
 * @name surveytimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveytimeApp
 */
angular.module('rulerApp')
  .controller('miao',["$scope","$http",'$location','$cookieStore','$stateParams',function($scope,$http,$location,$cookieStore,$stateParams) {
    $scope.labels = ["3个小时", "5个小时", "10小时"];
//$scope.data = [300, 500, 100];
	$http({
		url: "http://47.90.20.200:1602/item",
		method: "get",
		params: {
			'uid': $cookieStore.get('uid')
		}
	}).then(function(data){
		$scope.data = data;
	})
  }]);