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
  .module('rulerApp', ['ui.router','chart.js','ngMessages',"ngCookies",'summernote'])
  .constant("url","http://47.90.20.200:1602/")
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.when("","/jin").when("/gy","/gy/yan").otherwise("/404");
   $stateProvider.state("jin",{
        url:"/jin",
        templateUrl:"views/jin.html",
//      controller:"jin"
      }).state("gy",{
        url:"/gy",
        templateUrl:"views/gy.html",
//      controller:"gy"
      }).state("miao",{
        url:"/miao/:tit2&&:tit3&&:tit4&&:tit5&&:tit6&&:tit7",
        templateUrl:"views/miao.html",
     	controller:"miao"
      }).state("gy.li",{
        url:"/li",
        templateUrl:"views/li.html",
//      controller:"li"
      }).state("gy.yan",{
        url:"/yan",
        templateUrl:"views/yan.html",
//      controller:"yan"
      }).state("gy.miao",{
        url:"/miao",
        templateUrl:"views/miao.html",
        controller:"miaot"
      }).state("nie",{
        url:"/nie",
        templateUrl:"views/nie.html",
//      controller:"nie"
      }).state("niez",{
        url:"/niez/:id",
        templateUrl:"views/niez.html"
      }).state("404",{
        url:"/404",
        templateUrl:"404.html"
      })
		
  }])
