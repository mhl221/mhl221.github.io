'use strict';

/**
 * @ngdoc overview
 * @name rulerApp
 * @description
 * # rulerApp
 *
 * Main module of the application.
 */
angular
  .module('rulerApp', ['ui.router','chart.js'])
  .constant("url","http://47.90.20.200/")
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.when("","/jin").when("/gy","/gy/yan").otherwise("/404");
    $stateProvider.state("jin",{
      templateUrl:'views/jin.html',
      url:"/jin",
      controller:"jin"
    }).state("nie",{
      templateUrl:'views/nie.html',
      url:"/nie",
      controller:"nie"
    }).state("yan",{
      templateUrl:'views/yan.html',
      url:"/yan",
      controller:"yan"
    }).state("li",{
      templateUrl:'views/li.html',
      url:"/li",
      controller:"li"
    }).state("miao",{
      templateUrl:'views/miao.html',
      url:"/miao",
      controller:"miao"
    }).state("gy",{
      templateUrl:'views/gy.html',
      url:"/gy",
      controller:"gy"
    })
  }])
