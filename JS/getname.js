// var test = document.getElementsByClassName('test');

function byCN(clsName) {
	var tmpArr,nodes,i,len;
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(clsName);
	}else {
		tmpArr=[];
		nodes = document.getElementsByTagName('*');
		len = nodes.length;

		for(i=0;i<len;i++) {
			if(nodes[i].className.indexOf(clsName)>-1) {
				tmpArr.push(nodes[i]);
			}

		}
		return tmpArr;
	}
}

var test = byCN('test')
for(var i=0;i<test.length;i++) {

test[i].style.backgroundColor = 'blue';
	
}