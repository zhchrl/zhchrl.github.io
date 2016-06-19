var chengfa = document.getElementById('chengfa');
var tableHTML = [
     '<table border="5">'
];
for(var i=1;i<10;i++ ) {

	tableHTML.push('<tr>');

	for(j=1;j<(i+1);j++ ) {
		tableHTML.push('<td>'+i+'*'+j+"="+i*j+'<td>');
	}

	tableHTML.push('<tr>');

}

tableHTML.push('</table>');
console.log(tableHTML);
chengfa.innerHTML = tableHTML.join('');








/*var mybtn = document.getElementById('btn');
 mybtn.onclick = function() {
	window.open('http://www.baidu.com')
}
alert('警告框')
alert("带有折行的警告框带\n带有折行的警告框")
confirm("确认框")
prompt("这是一个提示框")*/