angular.module('rulerApp').filter('paging', function() {
		return function(lists, start) {
			if(lists !== undefined) {
				return lists.slice(start)
			}
		}
	})
	.controller("yan", ["$scope", "$http", "$location", "$cookieStore", function($scope, $http, $location, $cookieStore) {
		$http({
			url: "http://47.90.20.200:1602/item",
			method: "get",
			params: {
				'uid': $cookieStore.get('uid')
			}
		}).then(function(e) {
			console.log(e)
			$scope.data = e.data;
			$scope.dataNum = $scope.data.length; 
			$scope.pages = Math.ceil($scope.dataNum / 10); 
			$scope.pageNum = []; 
			for(var i = 0; i < $scope.pages; i++) {
				$scope.pageNum.push(i);
			}

			$scope.currentPage = 0;
			$scope.listsPerPage = 10; 

			$scope.setPage = function(num) { 
				$scope.currentPage = num; 
			}

			$scope.prevPage = function() { 
				if($scope.currentPage > 0) {
					$scope.currentPage--;
				}
			}
			$scope.nextPage = function() { 
				if($scope.currentPage < $scope.pages - 1) {
					$scope.currentPage++;
				}
			}
		}, function() {})

		$scope.del = function(e, e2) {
			$http({
				url: "http://47.90.20.200:1602/item/" + e.id,
				method: "delete"
			}).then(function(cbk) {
				$scope.result = cbk
				$scope.data.splice(e2, 1)
			}, function() {

			})
		}
		$scope.ck = function(index) {
			//	$location.path('/niez/' + index)
		}

	}])