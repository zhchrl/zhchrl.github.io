var next = document.getElementById('next'),
	container = document.getElementById('container'),
	prev = document.getElementById('prev'),
	next = document.getElementById('next'),
	imgWp = document.getElementById('img-wp'),
	lis = document.getElementById('li').getElementsByTagName('li'),
	index = 0;
	
	function animate(offset) {
		var newLeft = parseInt(imgWp.style.left)+offset;
		imgWp.style.left= newLeft+'px';
		if(newLeft==-3120) {
			imgWp.style.left = -520+'px' 
		}
		if(newLeft==0) {
			imgWp.style.left = -2600+'px'
		}
	}
	function showBtn() {
		for(var i=0;i<lis.length;i++) {
			if(lis[i].className=='on') {
				lis[i].className='';
				break;
			}
		}
		lis[index].className='on';
	}
	next.onclick = function() {
		animate(-520);
		index+=1;
		index = index>lis.length-1?0:(index)
		// index+=1;
		// if(index>lis.length-1) {
		// 	index = 0;
		// }
		showBtn();
		console.log(index)
	
		// if(newLeft==-3120) {
		// 	imgWp.style.left=-520+'px';
		// }
	}
	prev.onclick = function() {
		animate(520);
		index-=1;
		index = index<0?4:index;
		// if(index<0) {
		// 	index = 4;
		// }
		showBtn();
		// if(newLeft==0) {
		// 	imgWp.style.left=-2600+'px';
		// }
	}
	for(var j=0;j<lis.length;j++) {
		lis[j].setAttribute('index',j)
	}
	for(var i=0;i<lis.length;i++) {
		lis[i].onclick = function() {
			if(this.className=='on') {
				return;
			}
			var myIndex = this.getAttribute('index');
			// console.log(myIndex)
			var offset = -520*(myIndex-index);
			animate(offset);
			index = myIndex;
			showBtn();
			console.log(index)

		}
	}