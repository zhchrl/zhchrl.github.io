function accordion() {
	var $acc = $('.accordion'),
	     $h1 = $acc.find('h1');
	$h1.on('click',function() {
		var $this = $(this),
			$ul = $this.parent().find('ul');
			// $ul = $this.siblings();
		$ul.toggle();
		// console.log($ul)
		$ul.parent().siblings().find('ul').hide();
	});
}
accordion();



// var obj = new Object();
var student = {
	'age':18,
	gender:'nan',
	name:'jk',
	read:function(action) {
		if (action) {
			return '老子正在'+(action||'读书')+'。。。。。。';
		} else {
			return '老子用if正在读书'+'。。。。。。';
		}
		// return '老子正在'+(action||'读书')+'。。。。。。';
	}
}
var s = student.read('哈哈');
console.log(s);