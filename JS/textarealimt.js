var text = document.getElementById('textlimt'),
	// span =document.getElementById('tishi'),
	span2 = document.getElementById('n');




text.onkeyup = function() {
	// console.log(text.value)
	var str1 = (text.value),
		len = str1.length,
		n=30-len;
	if(len>=30) {
		text.value = str1.substr(0,30); 
		n=0;
		// oncontextmenu=self.event.returnValue=false;
	}
	// console.log(n);
	span2.innerHTML = n; 
	console.log(len)
}