

// var arr = [
//     {name:'qq',age:22,gender:'女'},
//     {name:'ww',age:21,gender:'女'},
//     {name:'ee',age:24,gender:'女'},
//     {name:'rr',age:29,gender:'男'},
//     {name:'tt',age:25,gender:'男'}
//   ];
// var r = arr.sort(function(obj1,obj2) {
//     return obj1.age-obj2.age
//   });
// console.log(r)
var name = "zhangsan";
function show() {
  console.log(name);
  console.log("Hello: " + name);
  // var name = "lisi";
  console.log("Hello :" + name);
  console.log("Hello " + arguments[0]);
}
show("wangwu")
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>Document</title>
//   <script src="../lib/city.data-3.js"></script>
//   <script src="../lib/jquery-1.12.1.min.js"></script>
//   <script>
//     $(document).ready(function() {

//       var cityData, areaData;

//       $('#prov').on('change', function() {
//         var val = this.value;

//         cityData = getChildrenByVal(val, cityData3);

//         initList(cityData, 'city');
//         $('#area').html('<option value="0">请选择</option>');
//       });

//       $('#city').on('change', function() {
//         var val = this.value;

//         areaData = getChildrenByVal(val, cityData);
//         initList(areaData, 'area');
//       });

//       var initList = function(data, renderId) {

//         var optArr = ['<option value="0">请选择</option>'];

//         $.each(data, function(index, obj) {
//           optArr.push('<option value="', obj.value, '">', obj.text, '</option>');
//           // console.log(obj.text)
//         });

//         $('#' + renderId).html(optArr.join(''));

//         // console.log(cityData3)
//       };

//       var getChildrenByVal = function(val, pData) {
//         var currChildren = [];
//         $.each(pData, function(index, obj) {
//           if (obj.value == val) {
//             currChildren = obj.children;
//             return false;
//           }
//         });
//         return currChildren;
//       };

//       initList(cityData3, 'prov');

//     });
//   </script>
// </head>
// <body>

//   <label>
//     省: 
//     <select id="prov">
//       <option value="0">请选择</option>
//     </select>
//   </label>

//   <label>
//     市: 
//     <select id="city">
//       <option value="0">请选择</option>
//     </select>
//   </label>

//   <label>
//     区/县: 
//     <select id="area">
//       <option value="0">请选择</option>
//     </select>
//   </label>
  
// </body>
// </html>

















// function uniqArr(arr) {
//   var i,j,len=arr.length,count=0;
//   for(i=0;i<len;i++) {
//     for(j=arr.length-1;j>i;j--) {
//       count++;
//       if(arr[i]===arr[j]) {
//         arr.splice(j,1);
//         // console.log(count)
//       }
//     }
//   }
//   return arr;
// }
// var arr = uniqArr([1,1,1,1,2,undefined,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
// console.log(arr);

// // alert(typeof typeof(null));
// var foo = {
//   bar:function(){return this.baz},
//   baz:1
// };
// var t=function(){
//   return typeof arguments[0]();
//   // alert()
// }(foo.bar);
// console.log(t)




// function replaceEmptyItem(arr){
//   for(var i=0,len=arr.length;i<len;i++){
//   if( arr[i]==''){
//   arr.splice(i,1);
//   len--;
//   i--;
//   }
//   }
// }

// 数组去重方法之三及其bug的处理
// function uniq3(arr){
//     var i , j,len = arr.length;
//     for (i = 0; i<len; i++){
//         for (j = i+1; j<len; j++){
//             if(arr[i] === arr[j]){
//                 arr.splice(j,1);
//                 len--;
//                 i--;
//                 // j--;
//             }
//         }
//     };
    
//     return arr;
// }
// var arr3 = uniq3([1,1,1,2,1,6]);
// console.log (arr3);




// var sayHello = function(q) {
//   alert(q+'qq')
// }
// sayHello(3333)

// alert(sum(10,10));
//  var sum=function(num1,num2)
//  {
//      return num1+num2;
//  }; 

// alert(sum(10,10));
//  function sum(num1,num2)
//  {
//      return num1+num2;
//  } 


// function MadDog(){
// }

// MadDog.prototype = new Dog();

// MadDog.prototype.yelp = function(){    
//     var self=this;
//     setInterval(function(){
//         self.wow();
//     },500);
// }



// function Dog() {
//   this.wow = function() {
//     console.log('wow');
//      setTimeout(this.yelp(),50000);
//   }
//   this.yelp = function() {
//     this.wow();
   
//   }
// }
// Dog();
// this.wow();











// var arr=['<table>',];
// for(var i=0;i<8;i++) {
//       arr.push('<tr>');
//       for(var j=0;j<10;j++) {
//         arr.push('<td>','@','</td>')
//       }
//       arr.push('</tr>')
// }
// arr.push(,'</table>')
   






















// var url = "http://dohtml5.duapp.com/php/wbc2/data.php?callback=?";
// var para = {
//   username : "ssssssss",
//   age : 20
// }
// $.get(url, para,ddd,'json');
// function ddd(ccc) {
//   console.log (ccc)
// }













// var date =new Date;
// var hour= date.getHours();
// var minute= date.getMinutes();
// var second = date.getSeconds();
// if (second<10) {
//   second='0'+second;
// };
// var ttt = hour +':'+minute + ':' + second;

// // var ss =document.getElementById('myClock');
// var ss =document.getElementById("myClock");
// console.log(ss);
// ss.innerHTML =ttt;




/*var members = [
    '坚强',
    '拼搏',
    '必胜',
    '睿智',
    '人定胜天',
    '回身',
    '千凡',
    '光凝',
    '仔细',
    '精确',
    '营销',
    '自信'
]
var r = Math.floor(Math.random()*12);
console.log(members[r]);*/


/*点火倒计时以及时间戳*/
/*var t =setInterval(logTime,1000),
    start = 5;

function logTime() {
  
  if(start>-1) {
    
    console.log(start);
    start--;
  }
 else {
    clearInterval(t);
    console.log('点火');
  }
}

var d = new Date();
console.log(Math.floor(d.getTime()/1000/60/60/24/365.2));*/


/*function shuchu(age){
	if (age<=18) {console.log("未成年")}
	else if (age>18&&age<=30) {console.log("青年")}
	else if (age>30&&age<=50) {console.log("中年")}
	else {console.log("老年")}
*/

// function hg(age) {
// 	if (age<18) {
// 		console.log("未成年")
// 	} else if (age>18&&age<=30){
// 		console.log("青年")
// 	} else if (age>30&&age<=50){
// 		console.log("中年")
// 	} else {console.log("老年")}
// }
// hg(8);




//  function dd(date){
//  	switch(date){
//  		case 1:{
//  			console.log("今天是周一");
//  			break;
//  		}
//  		case 2:{
//  			console.log("今天是周二");
//  			break;
//  		}
//  		case 3:{
//  			console.log("今天是周三");
//  			break;
//  		}
//  		case 4:{
//  			console.log("今天是周四");
//  			break;
//  		}
//  		case 5:{
//  			console.log("今天是周五");
//  			break;
//  		}
//  		case 6:{
//  			console.log("今天是周六");
//  			break;
//  		}
//  		case 7:{
//  			console.log("今天是周日");
//  			break;
//  		}
//  	}
//  };
//  dd(5);


//  var total=0;
//  for (var i = 3; i<100000; i+=3) {
//  	total+=i;
//  };
//  console.log(total);


//  for(var i=0;i<10;i++){
//  	for(var j=0;j<10;j++){
//  		document.write("*")
//  	}document.write("<br>")
 	
//  }

//  for(var i=1;i<10;i++) {
//  	for(var j=1;j<10;j++) {
//  		var x=i*j
//  		document.write("x")
//  		document.write("<br>")
//  	}
//  }
// var obj ={
// 	name:"章程",
// 	age:20,
// 	email:"zhangcheng@126.com",
// 	address:"北京市海淀区西二旗"
// };
// for (var o in obj) {
// 	console.log(o);
// 	console.log(obj[o]);
	// console.log(obj.o);
// }
// 以下是访问对象的方法
// var obj ={};
// obj.sayHello = function() {
// 	alert("hello");
// }
// obj.sayHello();
// obj["sayHello"]();
// document.write(Math.floor(Math.random()*11))
// 判定字符串是否以"a"开头
// var r=false;
// var str="abcd";
// r=str.indexOf("a")==0;
// if (r) {
// 	alert("yes")
// }
//      else {
// 	alert("no")
// }
// 判定字符串是否以"a"结尾
/*var r=true;
var str="hjkfjfsslfhkas";
r=str.lastIndexOf("a")==str.length-1;
if (r) {
	alert("yes")
}
else {
	alert("no")
}*/
/*var arr2= new Array("a","b","c","d",8,false);
console.log(arr2);
var arr3=["a","b","c","d","e"];
console.log(arr3);
console.log(arr2[3]);
arr3[2]="更换数组元素";
console.log(arr3);*/
/*var members=[
      '必胜1',
      '必胜2',
      '必胜3',
      '必胜4',
      '必胜5',
      '必胜6',
      '必胜7',
      '必胜8',
      '必胜9',
      '必胜10',
      '必胜11',
];
var r=Math.floor(Math.random()*11);
// var r=parseInt(Math.random()*11);
console.log(members[r]);*/
/*var obj= new Object();
obj.name='必胜2';
obj.age=19;
obj.gender='男';
console.log(obj);*/
// 推荐创建对象的第三种方法
// var obj3= {
// 	name: '必胜6',
// 	age: '22',
// 	gender: '男'
// };
// console.log(obj3);
// // 得到对象属性值得方法
// console.log(obj3.name);
// console.log(obj3['gender']);
// // 设置对象的某个属性值
// obj3.name='人定胜天';
// obj3['gender']='女';
// console.log(obj3)
/*var second=10;
var timer;
function change()
{
  second--;
 
 if(second>-1)
 {
  document.getElementById("second").innerHTML=second;
  timer = setTimeout('change()',1000);//调用自身实现
 }
 else
 {
   clearTimeout(timer);
 }
}
timer = setTimeout('change()',1000);*/


/*var future = new Date();
var now = new Date();
var t =Math.floor((future-now)/1000);
var str =Math.floor(t%86400/3600)+':'+Math.floor(t%86400/3600/60)+':'+t/60;*/


  
