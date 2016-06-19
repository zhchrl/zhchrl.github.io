var btn = $('#btn');
console.log(btn)

btn.on('click',function() {
	$('.red').animate({marginTop:'99px'},2222)
	// $('.red').fadeTo('slow',0.3)
	// $('.red').hide(9222)
	// $('.red').fadeOut(2000);
	// $('.red').fadeIn(3000);
	// $('.red').fadeToggle()
})