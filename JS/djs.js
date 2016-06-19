var $btn = $('#btn');
	// $input = $('#input');
$btn.on('click',function(){
	var h,m,s;
	var val01 = input.value,
		$val02 = $('#sel').val(),
		val = val01*$val02;
		console.log(val);
		$num = $('.num');
		// h=Math.floor(val01/3600);
		// m=Math.floor(val01%3600/60);
		// s=val01%3600%60;
		// time = h +':'+ m +':'+ s;
		// // console.log(time);
		// $num[0].innerHTML = time;
		timer = setInterval(logTime,1000);
		function logTime() {
			var arr = [h,':',m,':',s];
			val = val-1;
			if(val>=-1){
			h=$w.fillZero(Math.floor(val/3600));
			m=$w.fillZero(Math.floor(val%3600/60));

			s=$w.fillZero(val%3600%60);
			time = h +":" +m +":" +s
			time = arr.join('');
			// $num[0].innerHTML = time;
			$num.html(time);
		}else {
			clearInterval(timer)
		}
		}	
		// if(val=0){
		// 	clearInterval(timer)
		// }
})