!function() {
	var $ul = $('ul'),timer;
	// var li0 = $ul.find('li').first();
	// $ul.append(li0.clone());
	// console.log(li0);
	var width = $ul.find('li').width();

	// console.log(width);
	var len = $ul.find('li').size();
	// console.log(len);
	var ulWidth = $('ul').width(width*(len+1)+(len+1)*20);
	// console.log(ulWidth.width());
	function ant() {
		$ul
		   .append($ul.find('li').first().clone())
		   .animate({marginLeft:-(width+10)},500,function() {
			$ul
			   	.css('margin-left',0)
				.find('li').first().remove()   	
		})
	}
	
	timer = setInterval(ant,1000);
	$ul.on('mouseover',function() {
		clearInterval(timer)
	}).on('mouseout',function(){
		timer = setInterval(ant,1000)
	})
}() 