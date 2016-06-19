!function(window,document,$,undefined) {
	var $rightNavBar = $("#rightNavBar");
	$rightNavBar.find('.nav-wp i').on('mouseover',function() {
			var $this = $(this),
				$target = $this.siblings('span'),
				width = $target.width();
			$this.siblings('span').animate({'left':-width+'px'},180)

	}).on('mouseout',function() {
		var $this = $(this);
		$this.siblings('span').animate({'left':'0px'},500)
	})

} (window,document,jQuery)