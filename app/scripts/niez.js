angular.module('rulerApp')

.controller("niez", ["$scope","$http",'$location','$cookieStore','$stateParams',function($scope,$http,$location,$cookieStore,$stateParams) {
	$scope.bf=$scope.bff=$scope.bfff=$scope.bffff=false;
	$http({
		url:"http://47.90.20.200:1602/item/"+$stateParams.id,
		method: "get",
		params:{'uid':$cookieStore.get('uid')}
	}).then(function(e) {
		console.log(e.data)
		$scope.ww=e.data;
		for(var i=0;i<e.data.option.length;i++){
			if(e.data.option[i].type==0){
				$scope.bfff=true;
				$scope.bf=$scope.bff=$scope.bffff=false;
			}else if(e.data.option[i].type==1){
				$scope.bff=true;
				$scope.bf=$scope.bfff=$scope.bffff=false;
			}else if(e.data.option[i].type==2){
				$scope.bf=true;
				$scope.bff=$scope.bfff=$scope.bffff=false;
			}else if(e.data.option[i].type==3){
				$scope.bffff=true;
				$scope.bf=$scope.bff=$scope.bfff=false;
			}
		}
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
  
 	$scope.dj=function(a){
 		var aaa;
 		if(a){
 			
 			aaa=1;
 		}
 		$cookieStore.put('top',aaa)
 	}
 
// 	$scope.dd=function(a){
// 		var ddd;
// 		if(a){
// 			
// 			ddd=1
// 		}
// 		$cookieStore.put('top',ddd)
// 		
// 	}
}])