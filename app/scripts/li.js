angular.module('rulerApp')
 .controller("li",function($scope) {
 	$scope.data = {"option":[{"title":"","opt":[{"op":"","num":0}],"type":"-1"}],"title":""}
 	$scope.add = function(){
		$scope.data.option.push({"title":"","opt":[{"op":"","num":0}],"type":"-1"})
		//alert(1)
	}
	// if($scope.data.option.type == 0||2){
             
	// }else{

	// }
	
 })