var didian=[
'故宫',
'长城',
'十三陵',
'十渡',
'圆明园',
'颐和园',
];
var where = document.getElementById('where');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var timer;
start.onclick = function() {
	if (timer) {
		return;
	};
	timer = setInterval(
		function() {
			var r = Math.floor(Math.random()*(didian.length)); 
			 // {为什么不是(length-1)}
            where.innerHTML = didian[r];
		},202)
};
stop.onclick = function() {
	clearInterval(timer)
	timer = ''
}

var newBtn = document.getElementById('newBtn');
var ddText = document.getElementById('ddText');
newBtn.onclick = function() {
	var val = ddText.value;
	val = val.split('|');
	didian = didian.concat(val);
	console.log(didian)
}; 

 