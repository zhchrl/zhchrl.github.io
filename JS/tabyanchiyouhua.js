+function() {
	var $ul = $('#tab ul');
	var $lis = $ul.find('li');
	var $divs = $('.tab-body div');
	var timer;
	$lis
		.on('mouseover',function() {
			var $this = $(this);
			var index = $this.index();
			// console.log(index)
			timer = setTimeout(function() {
				$this.addClass('on').siblings('.on').removeClass('on');
				$divs.eq(index).show().siblings(':visible').hide()
			},150)
			
		})
		.on('mouseout',function() {
			if(timer) {
				clearTimeout(timer)
			}
		})
}()