
		document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		window.onresize = function(){
			document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		};	

window.onload = function(){
	 /**����һ�������**/
  function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
  }
  /**����һ�����ɫ**/
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

  /**������֤��ͼƬ**/
  function drawPic(){
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    /**���Ʊ���ɫ**/
    ctx.fillStyle = randomColor(180,240); //��ɫ��̫����ܵ��¿�����
    ctx.fillRect(0,0,width,height);
    /**��������**/
    var str = 'ABCEFGHJKLMNPQRSTWXY1234567890';
    var num="";/**��ȡ���������**/
    for(var i=0; i<4; i++){
      var txt = str[randomNum(0,str.length)];
      num+=txt;
      ctx.fillStyle = randomColor(50,160);  //�������������ɫ
      ctx.font = randomNum(15,40)+'px SimHei'; //������������С
      var x = 10+i*25;
      var y = randomNum(25,45);
      var deg = randomNum(-45, 45);
      //�޸�����ԭ�����ת�Ƕ�
      ctx.translate(x,y);
      ctx.rotate(deg*Math.PI/180);
      ctx.fillText(txt, 0,0);
      //�ָ�����ԭ�����ת�Ƕ�
      ctx.rotate(-deg*Math.PI/180);
      ctx.translate(-x,-y);
    }
    /**���Ƹ�����**/
    for(var i=0; i<4; i++){
      ctx.strokeStyle = randomColor(40,180);
      ctx.beginPath();
      ctx.moveTo( randomNum(0,width), randomNum(0,height) );
      ctx.lineTo( randomNum(0,width), randomNum(0,height) );
      ctx.stroke();
    }
    /**���Ƹ��ŵ�**/
    for(var i=0; i<100; i++){
      ctx.fillStyle = randomColor(0,255);
      ctx.beginPath();
      ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
      ctx.fill();
    }
    return num
  }
  
  /**�ж�**/
                        var user=document.getElementById("name");
				        var bot=document.getElementsByTagName("button")[0];
				        var ram=null;
				        ram=drawPic();
				       /* alert(ram)*/
				        bot.onclick=function(){
//				        	alert(user.value.toUpperCase())
			if(user.value.toUpperCase()==ram){
				//alert("��֤ͨ��")
			}else if(user.value.toUpperCase()==''){
				//alert("��������֤��")
			}else{
				//alert("��֤���󣡣�")
			}
//				        		alert(user.value.toUpperCase()==ram)
				        }
}

angular.module('app', ['ngRoute','ngMessages'])
.controller("jin", ["$scope", "$http",function($scope,$http) {
	$http({
		url:"http://47.90.20.200:1602/users/login",
		method: "post",
		data:{username:'username',password:'password'}
	}).then(function(e) {
		console.log(e)
		
	}, function() {})
	$scope.btn = function(){
		
	}
}])

        
    
       
    




