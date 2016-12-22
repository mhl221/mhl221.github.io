	document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		window.onresize = function(){
			document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		};	

window.onload = function(){
	 /**生成一个随机数**/
  function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
  }
  /**生成一个随机色**/
  function randomColor(min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
  }
  drawPic();
  document.getElementById("changeImg").onclick = function(e){
    e.preventDefault();
    ram=drawPic();
   /* alert(ram)*/
  }

  /**绘制验证码图片**/
  function drawPic(){
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    /**绘制背景色**/
    ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    /**绘制文字**/
    var str = 'ABCEFGHJKLMNPQRSTWXY1234567890';
    var num="";/**获取随机数内容**/
    for(var i=0; i<4; i++){
      var txt = str[randomNum(0,str.length)];
      num+=txt;
      ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
      ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
      var x = 10+i*25;
      var y = randomNum(25,45);
      var deg = randomNum(-45, 45);
      //修改坐标原点和旋转角度
      ctx.translate(x,y);
      ctx.rotate(deg*Math.PI/180);
      ctx.fillText(txt, 0,0);
      //恢复坐标原点和旋转角度
      ctx.rotate(-deg*Math.PI/180);
      ctx.translate(-x,-y);
    }
    /**绘制干扰线**/
    for(var i=0; i<4; i++){
      ctx.strokeStyle = randomColor(40,180);
      ctx.beginPath();
      ctx.moveTo( randomNum(0,width), randomNum(0,height) );
      ctx.lineTo( randomNum(0,width), randomNum(0,height) );
      ctx.stroke();
    }
    /**绘制干扰点**/
    for(var i=0; i<100; i++){
      ctx.fillStyle = randomColor(0,255);
      ctx.beginPath();
      ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
      ctx.fill();
    }
    return num
  }
  
  /**判断**/
                        var user=document.getElementById("name");
				        var bot=document.getElementsByTagName("button")[0];
				        var ram=null;
				        ram=drawPic();
				       /* alert(ram)*/
				       
}

angular.module('rulerApp')
.controller("jin", ["$scope", "$http","localStorage",function($scope,$http$localStorage) {
	$http({
		url:"http://47.90.20.200:1602/users/login",
		method: "post",
		data:{username:'username',password:'password'}
	}).then(function(e) {
		console.log(e)

	
	}, function() {})
	$scope.btn = function(){
		
	}
	$scope.cv = function(){
		alert(1)
//		window.location.href='nie.html'
	}
}])