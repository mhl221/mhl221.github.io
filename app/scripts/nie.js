
document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		window.onresize = function(){
			document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
		};	

//window.onload = function(){
//	 /**生成一个随机数**/
//function randomNum(min,max){
//  return Math.floor( Math.random()*(max-min)+min);
//}
///**生成一个随机色**/
//function randomColor(min,max){
//  var r = randomNum(min,max);
//  var g = randomNum(min,max);
//  var b = randomNum(min,max);
//  return "rgb("+r+","+g+","+b+")";
//}
//drawPic();
//document.getElementById("changeImg").onclick = function(e){
//  e.preventDefault();
//  ram=drawPic();
// /* alert(ram)*/
//}
//
///**绘制验证码图片**/
//function drawPic(){
//  var canvas=document.getElementById("canvas");
//  var width=canvas.width;
//  var height=canvas.height;
//  var ctx = canvas.getContext('2d');
//  ctx.textBaseline = 'bottom';
//
//  /**绘制背景色**/
//  ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
//  ctx.fillRect(0,0,width,height);
//  /**绘制文字**/
//  var str = 'ABCEFGHJKLMNPQRSTWXY1234567890';
//  var num="";/**获取随机数内容**/
//  for(var i=0; i<4; i++){
//    var txt = str[randomNum(0,str.length)];
//    num+=txt;
//    ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
//    ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
//    var x = 10+i*25;
//    var y = randomNum(25,45);
//    var deg = randomNum(-45, 45);
//    //修改坐标原点和旋转角度
//    ctx.translate(x,y);
//    ctx.rotate(deg*Math.PI/180);
//    ctx.fillText(txt, 0,0);
//    //恢复坐标原点和旋转角度
//    ctx.rotate(-deg*Math.PI/180);
//    ctx.translate(-x,-y);
//  }
//  /**绘制干扰线**/
//  for(var i=0; i<4; i++){
//    ctx.strokeStyle = randomColor(40,180);
//    ctx.beginPath();
//    ctx.moveTo( randomNum(0,width), randomNum(0,height) );
//    ctx.lineTo( randomNum(0,width), randomNum(0,height) );
//    ctx.stroke();
//  }
//  /**绘制干扰点**/
//  for(var i=0; i<100; i++){
//    ctx.fillStyle = randomColor(0,255);
//    ctx.beginPath();
//    ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
//    ctx.fill();
//  }
//  return num
//}
//
///**判断**/
//                      var user=document.getElementById("name");
//				        var bot=document.getElementsByTagName("button")[0];
//				        var ram=null;
//				        ram=drawPic();
//				       /* alert(ram)*/
//				        bot.onclick=function(){
////				        	alert(user.value.toUpperCase())
////			if(user.value.toUpperCase()==ram){
////				/*alert("验证通过")*/
////				window.location.href='555/html'
////			}else if(user.value.toUpperCase()==''){
////				//alert("请输入验证码")
////			}else{
////				//alert("验证错误！！")
////			}
////				        		alert(user.value.toUpperCase()==ram)
//				        }
//}

var code ; //在全局 定义验证码
function createCode(){ 
	$('#checkCode').css("display",'block')
	$('#look').text('看不清换一张')
code = new Array();
var codeLength = 4;//验证码的长度
var checkCode = document.getElementById("checkCode");
$('#checkCode').val();

var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');

for(var i=0;i<codeLength;i++) {
   var charIndex = Math.floor(Math.random()*32);
   code +=selectChar[charIndex];
}
if(code.length != codeLength){
   createCode();
}
/*checkCode.value = code;*/
$('#checkCode').val(code)
}
var vv="";
function validate () {
var inputCode = document.getElementById("name").value.toUpperCase();

if(inputCode.length <=0) {
  // alert("请输入验证码！");
  
}
else if(inputCode == code ){
  // alert("成功！");
   vv = 1;
  // console.log(vv)
   return true;
   
}
else {
  //alert("验证码输入错误！");
  $('#name').val('')
createCode();
  
}
}


angular.module('rulerApp')
.controller("nie", ["$scope","$http","$location","$cookieStore",function($scope,$http,$location,$cookieStore) {
	
	$scope.a=function(){

		if(n_zh.value.length<8){
			return;
		}else if(n_zh.value.length>11){
			return;
		}else if(n_cmm.value!==n_mm.value){
			zww.innerHTML='☀密码不相同位'
		
			return;
		}else{
			
        $http({
			url:"http://47.90.20.200:1602/users",
			method: "post",
			data:$scope.updata
		}).then(function(e) {
			console.log(e.config.data.password)
	//		$scope.n_dc = e.data
	       if(vv == 1){
	       	console.log(e)

			$location.path('/jin')
	       }else{
	       	alert(2)
	       }
		}, function(e) {
	
		})
		
		}
		
	}
}])