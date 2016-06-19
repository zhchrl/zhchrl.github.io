// var arr = [2,4,'b',2,'a',8,4,6,'a',2,9,'h',1];
// // var arr01 = [];
// var obj = {};
// for(var j=0;j<arr.length;j++) {
// 	obj[arr[j]] = null;
// }
// arr.length=0;
// for(var o in obj) {
// 	arr.push(o);
// }
// console.log(arr);

/*for (var i =0;i<arr.length;i++) {
	if(!inArray(arr[i],arr01)) {
		arr01.push(arr[i])
	}
};
console.log(arr01);

function inArray(item,array) {
	for(var k=0;k<array.length;k++) {
		if(item==array[k]) {
			return true
		}
	}
	return false
}*/



















// var clock =document.getElementById("clock");
// setInterval(function() {
// 				var date = new Date();
// 				var hour = date.getHours();
// 				var minute = date.getMinutes();
// 				var second = date.getSeconds();
// 				if(hour<10) {hour='0'+hour};
// 				if(minute<10) {minute='0'+minute};
// 				if(second<10) {second='0'+second};
// 				var time = hour+":"+minute+":"+second;
// 				clock.innerHTML = time;
// },10)

var clock =document.getElementById("clock");
setInterval(function() {
				var date = new Date();
				var hour = xyz(date.getHours());
				var minute = xyz(date.getMinutes());
				var second = xyz(date.getSeconds());

				function xyz(r)  {
					return r<10 ? "0"+r:r;  
				}
				
				var time = hour+":"+minute+":"+second;
				clock.innerHTML = time;
},1)