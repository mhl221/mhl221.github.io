angular.module('rulerApp').filter('fy', function() {
	return function(e, page, size) {
		if(e !== undefined) {
			var start = page * size;
			var end = (page + 1) * size
			return e.slice(start, end)
		}

	}
}).controller("yan", ["$scope", "$http", "$location", "$cookieStore", function($scope, $http, $location, $cookieStore) {
	$http({
		url: "http://47.90.20.200:1602/item",
		method: "get",
		params: {
			'uid': $cookieStore.get('uid')
		}
		
	}).then(function(e) {
		console.log(e.data)
		$scope.data = e.data;
		$scope.$watch('data', function() {
			$scope.arr = []
			for(var i = 0; i < $scope.data.length / 10; i++) {
				$scope.arr.push(i)
			}
			if($scope.page !== 0) {
				$scope.page = Math.ceil($scope.arr.length / 10)
			}
		})

		$scope.page = 0
		$scope.pages = function(e) {
			$scope.page = e
		}
		$scope.prev = function() {
			$scope.page--
				if($scope.page < 0) {
					$scope.page = 0
				}
		}
		$scope.next = function(e) {
			$scope.page++
				if($scope.page > $scope.arr.length - 1) {
					$scope.page = $scope.arr.length - 1
				}
		}
	}, function() {})

	$scope.del = function(e) {
		$http({
			url: "http://47.90.20.200:1602/item/" + e.id,
			method: "delete"
		}).then(function() {
			$scope.data.splice($scope.data.indexOf(e), 1)

			$http({
				url: "http://47.90.20.200:1602/item",
				method: "get",
				params: {
					'uid': $cookieStore.get('uid')
				}
			}).then(function(e) {
				$scope.data = e.data;
				$scope.$watch('data', function() {
					$scope.arr = []
					for(var i = 0; i < $scope.data.length / 10; i++) {
						$scope.arr.push(i)
					}
					if($scope.page !== 0) {
						$scope.page = Math.ceil($scope.arr.length / 10)
					}
				})

				$scope.page = 0
				$scope.pages = function(e) {
					$scope.page = e
				}
				$scope.prev = function() {
					$scope.page--
						if($scope.page < 0) {
							$scope.page = 0
						}
				}
				$scope.next = function(e) {
					$scope.page++
						if($scope.page > $scope.arr.length - 1) {
							$scope.page = $scope.arr.length - 1
						}
				}
			}, function() {})

		}, function() {})
	}
	
}])