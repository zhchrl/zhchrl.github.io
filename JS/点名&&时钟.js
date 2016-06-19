var members = [
    '坚强',
    '拼搏',
    '必胜',
    '睿智',
    '人定胜天',
    '回身',
    '千凡',
    '湖曳光凝',
    '仔细',
    '精确',
    '营销',
    '自信'
];
var dm = document.getElementById('dm');
var timer
var start =document.getElementById('start');
var stop =document.getElementById('stop');
start.onclick=function(){

	if (timer) {return};
	// start.disabled='disabled'
	timer=setInterval(function (){
	var r =Math.floor(Math.random()*12);
dm.innerHTML=members[r]
},100);
};
stop.onclick=function(){

	// start.disabled=''
	clearInterval(timer);
	timer=undefined;
}
setInterval(function(){
var date =new Date;
var hour= date.getHours();
var minute= date.getMinutes();
var second = date.getSeconds();
if (second<10) {
	second='0'+second
};
if (minute<10) {
	minute='0'+minute
};
if (hour<10) {
	hour='0'+hour
};
var ttt = hour +':'+minute + ':' + second;

var ss =document.getElementById('ee');
ss.innerHTML =ttt;
},10);
var btn =document.createElement('button');
var txt =document.createTextNode('登录');
var ss =document.getElementById('creat');
btn.appendChild(txt);
ss.appendChild(btn);
ss.removeChild(btn);
