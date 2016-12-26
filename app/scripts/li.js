angular.module('rulerApp')
 .controller("li",function($scope) {
 	$scope.data = {"option":[],"title":""}
 	$scope.add = function(){
		$scope.data.option.push({"title":"","opt":[{"op":"","num":0}],"type":"-1","top":[]})
		//alert(1)
	}
	// if($scope.data.option.type == 0||2){
             
	// }else{

	// }
	$scope.arr=[{"nn":"gg"}]
	$scope.tian= function(index){
		$scope.data.option[index].top.push({"nn":"gg"})
		
	}
	$scope.brn= function(index,index2){
		$scope.data.option[index].top.splice(index2,1)
		
	}
 })