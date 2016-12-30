'use strict';
/**
 * @ngdoc function
 * @name surveytimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveytimeApp
 */
angular.module('rulerApp')
  .controller('miao',['$scope','$cookieStore','$stateParams', function ($scope,$cookieStore,$stateParams) {
  	console.log($stateParams);
  	$scope.ww=$stateParams.tit2;
  	$scope.xx=$stateParams.tit3;
  	$scope.vv=$stateParams.tit4;
  	$scope.v1=$stateParams.tit5;
  	$scope.v2=$stateParams.tit6;
  	$scope.v3=$stateParams.tit7;
    $scope.labels = [$scope.vv, $scope.v1,$scope.v2];
    var q = $cookieStore.get('top');
    var z= q;
   var x=q+rnd(1,10);
   var c=q+rnd(1,10);
  $scope.data = [z, x, c];
   	function rnd(n,m){
   		return parseInt(Math.random()*(m-n)+n);
   	}
  }]);