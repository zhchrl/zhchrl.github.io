var div = document.createElement('div');
var txt = document.createTextNode('原生js创建div并添加到body');
div.appendChild(txt);
document.body.appendChild(div);


$('body').append('<div>jquery中append()方法添加元素</div>');
$('<div>第二个jquery方法创建并添加到body{appendTo（）方法}</div>').appendTo('body');
$('span:not(.one)').css('background-color','red');
$('span').not('.two').css('font-size','50px');
$('<hr>').appendTo('body');
$('table tr:odd').css('background-color','red');
$('table tr:even').css({'background-color':'purple','color':'#fff'});
$('tr:eq(2)').html('<td>"$(tr:eq(2)")</td><td></td><td></td><td></td><td></td>');
$('tr').eq(3).css('background-color','yellow')
$('span[id=span]').css('background-color','blue')


// function Animal(age) {
// 	this.name='陈丽娟是傻逼';
// 	this.showName=function() {
// 		console.log(this.name)
// 	}
// };
// function cat() {
// 	this.name='cat'
// }
// var a1 = new Animal();
// var a2 = new Animal();
// var animal = new Animal();
// var cat = new cat();
// Animal.call(cat);
// cat.showName();
// animal.showName.call(cat);
// console.log(cat);
function Animal(age) {
	this.ager='age';
	this.showName=function() {
		console.log(this.ager)
	}
};
var a1 = new Animal(22);
var a2 = new Animal(33);
console.log(a1.showName==a2.showName)