angular.module('rulerApp')
.controller("niez", ["$scope","$http",'$location','$stateParams',function($scope,$http,$location,$stateParams) {
	$http({
		url:"http://47.90.20.200:1602/item",
		method: "get",
//		data:$scope.updata
	}).then(function(e) {
		console.log(e)
	}, function() {})
		
	$scope.options = {
    height: 300,
    focus: true,
    toolbar: [
            ['headline', ['style']],
            ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
            ['fontface', ['fontname']],
            ['textsize', ['fontsize']],
            ['fontclr', ['color']],
            ['view', ['fullscreen', 'codeview']],
            ['help', ['help']]
        ]
  };
}])