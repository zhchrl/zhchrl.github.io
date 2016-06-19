function renderTabByClass(className) {
	var $target = $(className);
	console.log($target);
	$target.each(function(i,obj) {
		var $obj = $(obj),
		    $lis =$obj.find('ul>li'),
		    $divs = $obj.find('div>div'),
		    evt;
		    evt = $obj.hasClass('mover') ? 'mouseover' : 'click';
		    // return $obj.hasClass('mover')? evt='mouseover':evt='click';
		    // if ($obj.hasClass('mover')) {
		    // 	evt = 'mouseover'
		    // } else {
		    // 	evt = 'click';
		    // };


		    console.log($obj);
		    $lis.on(evt,function() {
		    	var $this = $(this);
		    	index = $this.index();
		    	$this.addClass('on').siblings('.on').removeClass('on');
		    	$divs.eq(index).show().siblings().hide();

		    })
		// console.log(this)
	});
	//     $lis = $target.find('ul li');
	//     var $divs = $target.find('div>div');
	// 	console.log($divs);
	// $lis.on('click',function(){
	// 	var $this = $(this);
	// 	index = $this.index();
	// 	$this.addClass('on').siblings('.on').removeClass('on');
	// 	$divs.eq(index).show().siblings().hide();

		
	// })

}
renderTabByClass('.tab');
// renderTabByClass('.tab2');