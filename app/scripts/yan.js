angular.module('rulerApp').filter('paging',function(){      
  return function(lists,start){
  	if(lists!==undefined){
    return lists.slice(start)  
  	}
  }
})
.controller("yan", ["$scope", "$http","$location","$cookieStore",function($scope, $http,$location,$cookieStore) {
		$http({
			url:"http://47.90.20.200:1602/item",
			method: "get",
			params:{'uid':$cookieStore.get('uid')}
		}).then(function(e) {
			console.log(e)
			$scope.data = e.data;
			$scope.dataNum =  $scope.data.length;  //获得数据总个数
    $scope.pages = Math.ceil($scope.dataNum/3);         //按照每页显示3个数据，得到总页数
    $scope.pageNum = [];                                //生成页码，在 html里 ng-repeat 出来
    for(var i=0;i<$scope.pages;i++){
      $scope.pageNum.push(i);
    }

    $scope.currentPage = 0;                       //设置当前页是 0
    $scope.listsPerPage = 3;                      //设置每页显示 3 个

    $scope.setPage = function(num){             // 当点击页码数字时执行的函数
      $scope.currentPage = num;                 //将当前页 设置为 页码数
    }

    $scope.prevPage = function(){               //点击上一页执行的函数
          if($scope.currentPage > 0){
              $scope.currentPage--;
          }
      }
     $scope.nextPage = function(){              //点击下一页执行的函数
          if ($scope.currentPage < $scope.pages-1){
              $scope.currentPage++;
          }
      }
   }, function() {})
	
	
	
$scope.del = function(index) {
			$scope.data.splice(index, 1)
		}
$scope.ck = function(index) {
	$location.path('/niez/' + index)
}

}])
