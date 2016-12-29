angular.module('rulerApp')
 .controller("li",["$scope","$http","$cookieStore","$location",function($scope,$http,$cookieStore,$location){
 	$scope.data = {"option":[],"title":""}
 	$scope.add = function(){
		$scope.data.option.push({"title":"","opt":[{"op":"","num":0}],"type":"","top":[]})
		//alert(1)
		$('#full').css('display','none')
		$('#tit').css('opacity','1')
		$('#tit').css('transition','1s all ease')
	}
	$scope.cct = function(index){
		$scope.data.option.splice(index,1)
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
	
	$scope.acs = function(){
				
		       $http({
						url:"http://47.90.20.200:1602/item",
						method: "post",
						data:{"uid":$cookieStore.get('uid'),"option":$scope.data.option,"title":$scope.data.title}
					}).then(function(e) {
						console.log(e)
							  $location.path('/gy');
					// 	if($scope.list.option) {

					// 		for(var j = 0; j < $scope.list.option.length; j++) {
					// 			if($scope.list.option[j].type == 0) { // 单选题
					// 				alert(1)
					// 				$scope.rad.push($scope.list.option[j])
					// 			} else if($scope.list.option[j].type == 1) { //多选题
					// 				alert(1)
					// 				$scope.box.push($scope.list.option[j])
					// 			} else if($scope.list.option[j].type == 2) { //填空题
					// 				alert(1)
					// 				$scope.tex.push($scope.list.option[j])
					// 			} else { //问答题
					// 				alert(1)
					// 				$scope.arear.push($scope.allData.option[j])
					// 			}
					// 		}
					// 	}
					// 	$("#back").click(function() {
					// 		$scope.bg = true;
					// 		$("#box").css('display', "block");
					// 		$("#xiangxi").css('display', "none");
					// 		$scope.tex = [];
					// 		$scope.rad = [];
					// 		$scope.box = [];
					// 		$scope.arear = [];
					// 	})
					
					// if($scope.bg) {
					// 	$("#box").css('display', "none");
					// 	$("#xiangxi").css('display', "block");
					// 	$scope.bg = false;
					// } else {
					// 	$("#box").css('display', "block");
					// 	$("#xiangxi").css('display', "none");
					// 	$scope.bg = true;
					// }
			}, function(e) {})

		}

	}])