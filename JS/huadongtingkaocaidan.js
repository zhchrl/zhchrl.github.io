+function(window,document,$,undefined){

	// $('.aside-small').on('mouseenter',function(){
	// 	$(this).css({'background-position':'0px 110px'})
	// });
	// $('.aside-small').on('mouseleave',function(){
	// 	$(this).css({'background-position':'-4px 0'})
	// });
	$('.aside')
	.on('mouseenter',function(){
		// $(this).css('right',0);
		$(this).animate({
			right:0
		},300,function(){
			// alert(22)
			$('.aside-small').css({'background-position':'0 110px'})
		})
	})
	.on('mouseleave',function() {
		// $(this).css('right',-104);
		$(this).animate({
			right:-104
		},300,function(){
			$('.aside-small').css({'background-position':'-4px 0px'})
		})
	})

// $('.aside-small')
// 	.on('mouseenter',function(){
// 		// $(this).css('right',0);
// 		$('.aside').animate({
// 			right:0
// 		},300)
// 	})
// 	.on('mouseleave',function() {
// 		// $(this).css('right',-104);
// 		$('.aside').animate({
// 			right:-104
// 		},300)
// 	})

}(window,document,jQuery)