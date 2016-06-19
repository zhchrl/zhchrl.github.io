// 	function person(name,age) {
// 	this.name=name;
// 	this.age = age;
// 	this.show = function() {
// 		console.log(this.name+"是"+this.age)
// 	}
// }
// var person = function(name,age) {
// 	this.name=name;
// 	this.age = age;
// 	this.show = function() {
// 		console.log(this.name+"是一个大"+this.age)
// 	}
// }
// var s = new person('陈丽娟','是啥');
// console.log(s.constructor==person);
// console.log(s instanceof person)
// s.show();
// var cat = function(name){
// 	this.name=name;
// 	this.show=function(){
// 		console.log(this.name)
// 	}
// };
// var c1=new cat("陈丽娟");
// var c2=new cat("陈丽娟是是啥");
// c1.show();
// c2.show();
// console.log(c1.show==c2.show);


// var cat=function(name){
// 	this.name=name
// };
// cat.prototype.show = function() {
// 	console.log(this.name)
// };
// var c1=new cat("陈丽娟");
// var c2=new cat("陈丽娟是是啥");
// c1.show();
// c2.show();
// console.log(c1.show==c2.show);
/*function animal() {
	this.name="animal";
	this.showName=function() {
		console.log(this.name)
	}
}
function cat() {
	this.name = "caterrr";
}
var animal = new animal();
var cat = new cat();
animal.showName.call(cat);*/
// function myFun(a,b,c) {
// 	this.a = a;
// 	this.b = b;
// 	this.c = c;
// };
// var object = new Object();
// console.log(object.a);
// myFun.call(object,22,18,19);
// console.log(object.b);
// myFun.apply(object,[15,17,16]);
// console.log(object.c);
// function show() {
// 	console.log(this)
// }
// show();
// new show();
// function mul(n) {
// 	var i = 1,j=1;
// 	for(i=1;i<=n;i++) {
// 		j=j*i
		
// 	}

// 	return j;
// }
// console.log(mul(10))
// 得到某天是星期几
// function   getDateWeek(year,month,day) 
// { 
//       var   tmpdate   =   new   Date(year,month-1,day); 
//       console.log(tmpdate);
//       console.log(tmpdate.getDay()); 
      
    
// } 

// var a = getDateWeek(2008,8,8); 
// console.log(a)
// var date = new Date(2016,4,24);
// console.log(date)


// var year = date.getFullYear();
// console.log(year);
// var month = date.getMonth();
// console.log(month);
// var day = date.getDate();
// console.log(day);
// var xq = date.getDay();
// console.log(xq);

