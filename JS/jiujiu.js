/*var chengfa = document.getElementById('chengfa')
var tableHtml = [];
tableHtml.push('<table border=6>');
for(i=1;i<10;i++) {
	tableHtml.push('<tr>');
	for(j=1;j<=i;j++) {
		// tableHtml.push(' <td>+'i'+'*'+'j'+'='i*j+'</td>' ');
		tableHtml.push('<td>'+i+'*'+j+"="+i*j+'<td>');
	}
	tableHtml.push('</tr>');
};
tableHtml.push('</table>');
chengfa.innerHTML = tableHtml.join('');*/

var arr = [2,5,9,11,3,7,40,3];
function order(tmpArr) {
	return tmpArr.sort(function(a,b){
		return b-a;
	});
}
// function sortBy(a,b) {
	// return a-b;
	// if (a<b) {
	// 	return -1;
	// }else if(a>b) {
	// 	return 1;
	// }else {
	// 	return 0;
	// }
// }
var newArr = order(arr);
console.log(newArr);