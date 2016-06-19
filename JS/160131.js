// var arr = [2,32,4,56,65,25,38];
// function order (tmpArr) {
// 	return tmpArr.sort(function(a,b) {
// 		return b-a;
// 	})
// }
// var newArr = order(arr);
// console.log(newArr);
// var arr2 ='1 22 12 14 98 18 36'.split(' ');
// function order(tmpArr) {
// 	return tmpArr.sort(function(a,b) {
// 		return b-a;
// 	})
// }
// var pxsz = order(arr2);
// console.log(pxsz);
/*var arr2 = '1 22 12 14 98 18 36'.split(' ');
function order (tmparr) {
	return tmparr.sort(function(a,b) {
		return a-b;
	})
}
var sss = order (arr2);
console.log(sss);*/

var arrr = '1 3 4 5 6 8 6 23'.split(' ');
var n =[];
/*function uniq(tmpArr) {
	for(var i=0;i<arr.length;i++) {
		if(n.indexOf(tmpArr[i])==-1)
			n.push(tmpArr[i]);
	}
	return n;
};
var eptarr = uniq(arr);
console.log(eptarr);*/



function inArray(val,arr) {
	
    var index = -1;
	for(var i=0;i<arr.length;i++) {
		if(val==arr[i]) {
			index=i;
		}	
	};
	return index;
};
function uniq(tmpArr) {

	for(var i=0;i<tmpArr.length;i++) {
		if(inArray(tmpArr[i],n)==-1)
			{n.push(tmpArr[i])};
	}
	return n;
};
var eptarr = uniq(arrr);
console.log(eptarr); 