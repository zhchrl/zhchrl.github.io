!function(window, document, undefined) {

	function init() {
		getData();
		initEvt();
	}

	function initEvt() {
		var searchBtn = document.getElementById('searchBtn');
		searchBtn.onclick = onSearchBtnClick;
	}

	var onSearchBtnClick = function() {
		var sTxt = document.getElementById('sTxt').value;
		getData(sTxt);
	};

	function getData(txt) {
		var ls = localStorage, tmpArr = [], i, len = ls.length, key, obj;

		for (i=0; i<len; i++) {
			key = ls.key(i);
			obj = JSON.parse(ls.getItem(key));
			if (txt) {
				if (obj.name.indexOf(txt) > -1) {
					tmpArr.push(
						{
							id: key,
							name: obj.name,
							tel: obj.tel,
							address: obj.address
						}
					);
				}
			} else {
				tmpArr.push(
					{
						id: key,
						name: obj.name,
						tel: obj.tel,
						address: obj.address
					}
				);
			}
			
			// console.log(key)
		}

		initTable(tmpArr);
	}

	function initTable(arr) {
		var array=[],i;
		if (arr.length == 0) {
			alert('meiyoujieguo');
			getData();
			return;
		}
		for(i=0;i<arr.length;i++) {
			array.push(
				'<tr>',
						'<td>',arr[i].id,'</td>',
						'<td>',arr[i].name,'</td>',
						'<td>',arr[i].tel,'</td>',
						'<td>',arr[i].address,'</td>',
						'<td><a id="',arr[i].id,'" class="del-btn" href="javascript:;">删除</a>&nbsp<a href="javascript:;" class="update-btn" id="',arr[i].id,'">修改</a></td>',
					'</tr>'	

				)
		}
		$('#tbody').html(array.join(''))
	}

	init();

}(window, document);