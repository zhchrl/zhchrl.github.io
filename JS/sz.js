$('.qh').on('click',function() {
	// if(this.innerHTML=='显示') {
	// 	this.innerHTML='隐藏'
	// } else {
	// 	this.innerHTML='显示'
	// }
	var $cnt = $('.cnt');
	$cnt.toggleClass('show');
	if($cnt.hasClass('show')) {
		this.innerHTML = '隐藏'
	}else {
		this.innerHTML = '显示';
	}
});




// $('#test').addClass('purple');
// $('#rm').removeClass('purple');

// var span = document.getElementsByTagName('span');
// for(var i=0;i<span.length;i++) {
// 	span[i].title = 'hkhkhkhkhkhkhk'
// }
// var className = $('#test').attr('class');
// console.log(className)
// console.log(document.getElementById('test').className);
// console.log($('#test').attr('class'));
// $('#test').removeAttr('titlt');



// var span = document.getElementById('test');
// span.title = 'abcdefghijklmn';

// $('#test').attr('title','qqqqqqqqqqqqqq');




/*var myBtn = jQuery('#myBtn');
myBtn.css('backgroundColor','purple');
// myBtn[0].style.backgroundColor = 'red';
console.log(myBtn[0]);*/

// jQuery('#myBtn').css('backgroundColor','pink');
// $('#myBtn').css('backgroundColor','brown');
// $('.abc').css('backgroundColor','purple');
// $('div span').css('backgroundColor','Brown');
// var $span = $('#test');
// console.log($span.size());
// console.log($span.length);