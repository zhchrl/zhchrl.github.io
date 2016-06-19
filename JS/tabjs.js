var lis = document.getElementsByTagName('li'),
	divs = document.getElementsByTagName('p');
	// console.log(divs);
	divs[0].style.display = 'block';
	for(var i=0;i<lis.length;i++) {
		lis[i].index = i;
		console.log(lis[i].index);
		lis[i].onclick = function() {
			for(var j=0;j<lis.length;j++) {
				lis[j].className = 'list';
				divs[j].style.display = 'none'
			}
			this.className = 'on';
			divs[this.index].style.display = 'block';
			// console.log(this.index)
		}
	}
/*lis[0].onclick = function() {
	lis[0].className = 'on';
	lis[1].className = 'list';
	lis[2].className = 'list';
	divs[0].style.display = 'block';
	divs[1].style.display = 'none';
	divs[2].style.display = 'none';
}

lis[1].onclick = function() {
	lis[1].className = 'on';
	lis[0].className = 'list';
	lis[2].className = 'list';
	divs[1].style.display = 'block';
	divs[0].style.display = 'none';
	divs[2].style.display = 'none';
}
 
lis[2].onclick = function() {
	lis[2].className = 'on';
	lis[1].className = 'list';
	lis[0].className = 'list';
	divs[2].style.display = 'block';
	divs[1].style.display = 'none';
	divs[0].style.display = 'none';
}*/

