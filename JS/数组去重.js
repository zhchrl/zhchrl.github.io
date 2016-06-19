var arr2 = [4,2,3,6,4,8,2,9,3,99,6,'gg'];
/*function uniq(tmpArr) {
	var emptyArr = [];

	for(var i=0;i<tmpArr.length;i++) {
		if(emptyArr.indexOf(tmpArr[i])==-1) {
			emptyArr.push(tmpArr[i])
		}
	}
	return emptyArr;
}*/
function uniq(tmpArr) {
	var emptyArr = [];
	for(var i=0;i<tmpArr.length;i++) {
		if (inArray(tmpArr[i],emptyArr)==-1) {
			emptyArr.push(tmpArr[i])
		};
	}
return emptyArr;	
}

function inArray(val,arr) {
	var index=-1;
	for(var i=0;i<arr.length;i++)
		if(val==arr[i]) {
			index=i;
			break;
		}
	return index;	
}


var newArr2 = uniq(arr2);
console.log(newArr2);