+function(window,undefined){
	var	content = document.getElementById('content');
	var ctrl = document.getElementById('ctrl'),i,count,parent,children;
	var input = content.getElementsByTagName('input');
	var trs = content.getElementsByTagName('tr');
	// var tbodyCnt = document.getElementById('tbodyctn');
	ctrl.onclick = function() {
		parent=this.parentNode.parentNode.parentNode.nextSibling.nextElementSibling;
		children = parent.children;
		// console.log(children);
		if(this.checked) {
			// alert(22)
			for(i=0;i<input.length;i++) {
				input[i].checked='checked'
			};
			count=4;
			
			for(i=0;i<children.length;i++) {
				children[i].style.backgroundColor='purple'
			};

			// this.parentNode.parentNode.
		}else {
			for(i=0;i<input.length;i++) {
				input[i].checked='';
			};
			count=0;
			for(i=0;i<children.length;i++) {
				children[i].style.backgroundColor='';
			};
		};
		// console.log(count);
	};

	for(i=0;i<input.length;i++) {
		count=0;
		input[i].onclick = function() {
			// alert(12)
			if(this.checked) {
			count++;
			this.parentNode.parentNode.style.backgroundColor='purple';
			} else if (this.checked=='') {
				count--;
				this.parentNode.parentNode.style.backgroundColor='';
			}
			// console.log(count);
			if(count==input.length) {
			ctrl.checked='checked'
			} else {ctrl.checked=''}
		};	
	};
	for(i=0;i<trs.length;i++) {
		trs[i].onclick = function() {
			console.log(this.childNodes[0])
		}
	}

}(window,undefined)

// var array = ['one','two','three','four'];
// for(var i=0;i<array.length;i++) {
// 	getDateFromeServe((function(j) {
// 		return function() {
// 			console.log(array[j])
// 		};
// 	})(i))
// };
// function getDateFromeServe(callback) {
// 	setTimeout(callback(),10000)
// 	// callback()

// }

var arr=[];
for(var i=0;i<10;i++) {
	arr.push(Math.floor(Math.random()*(100-10)+10))
}
arr.sort(function (a,b) {
	return a-b
})
console.log(arr)