// var d = new Date();
// var str =WBC.fillZero(d.getHours())+':'+WBC.fillZero(d.getMinutes())+':'+WBC.fillZero(d.getSeconds());
// console.log(str);
/*var clock = document.getElementById('clock');
clock.innerHTML = str;*/

// var clock =$w('clock');

// clock.innerHTML = str;

// WBC.byClasstext(clock,'def');

var f = new Date(); 

// console.log($w('clock'));
// console.log(clock);
$w('clock').innerHTML = $w.formatDate(f);


var sss= WBC.byClass('abc');
for(var i=0;i<sss.length;i++) {
	sss[i].style.backgroundColor = 'red';
}