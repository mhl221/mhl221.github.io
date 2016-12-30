'use strict';
/**
 * @ngdoc function
 * @name surveytimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveytimeApp
 */
angular.module('rulerApp')
  .controller('miao',['$scope','$cookieStore', function ($scope,$cookieStore) {
    $scope.labels = ["3个小时", "5个小时", "10小时"];
    var q = $cookieStore.get('top');
    var z= q;
   var x=q+rnd(1,10);
   var c=q+rnd(1,10);
  $scope.data = [z, x, c];
   	function rnd(n,m){
   		return parseInt(Math.random()*(m-n)+n);
   	}
  }]);