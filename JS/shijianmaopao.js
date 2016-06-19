$('body').on('click',function(){alert('body')});
$('.div').on('click',function(){alert('div')});
$('ul').on('click',function(){alert('ul')});
$('#li').on('click',function(){alert('li')});
$('.p').on('click',function(){alert('p')});
$('.span').on('click',function(e){
	alert('span');
	// return false;
	// e.stopPropagation();
	event.stopPropagation();
	// (jquery阻止事件冒泡的方式,同样有return false)



	});
