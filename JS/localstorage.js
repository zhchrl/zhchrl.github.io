+function(window,document,$,undefined) {
	// console.log(alert(22))
	// var $tbody = $('#tbody');
	var init = function() {
		initEvent();
		initTable();
	};
	var initEvent = function() {
		$('#saveBtn').off('click').on('click',onSaveBtnOnclick);
		$('#tbody').on('click','.del-btn',onDelBtnClick);
		$('#tbody').on('click','.update-btn',onUpDateBtnClick);
		$('#search-btn').on('click',onSearchBtnCilck);
	};
	var initTable = function(nam) {
		// console.log(localStorage.length)
		var len = localStorage.length,
			tmpKey,tmpVal,i,trs=[],namer=[],count=0;
		for(i=0; i<len; i++) {

			// console.log(i)

			tmpKey = localStorage.key(i);
			tmpVal = JSON.parse(localStorage.getItem(tmpKey));
			// namer[i] = tmpVal.name;
			// console.log(namer[i]);
			if(nam) {
				namer.push(tmpVal.name);
				// console.log(namer)
				if(namer[i].indexOf(nam)>-1) {
					trs.push(
						'<tr>',
						'<td>',i+1,'</td>',
						'<td>',tmpVal.name,'</td>',
						'<td>',tmpVal.tel,'</td>',
						'<td>',tmpVal.address,'</td>',
						'<td><a id="',tmpKey,'" class="del-btn" href="javascript:;">删除</a>&nbsp<a href="javascript:;" class="update-btn" id="',tmpKey,'">修改</a></td>',
					'</tr>'	
					);
				} else if(namer[i].indexOf(nam)==-1) {
					count++
					// alert(22)
				} 
				if(count==len) {
					 // initTable();
					 // alert('未检索到匹配的结果');
					 // count=0;
					 alert('未检索到匹配的结果');
					 initTable();
					 alert(11)
				}
				

			} else {
				trs.push(
					'<tr>',
						'<td>',i+1,'</td>',
						'<td>',tmpVal.name,'</td>',
						'<td>',tmpVal.tel,'</td>',
						'<td>',tmpVal.address,'</td>',
						'<td><a id="',tmpKey,'" class="del-btn" href="javascript:;">删除</a>&nbsp<a href="javascript:;" class="update-btn" id="',tmpKey,'">修改</a></td>',
					'</tr>'	
				);
			}
			// console.log(typeof tmpVal)

			// console.log(tmpKey,tmpVal);
		}
		$('#tbody').html(trs.join(''))

	}
	var onSaveBtnOnclick = function() {
		var $this = $(this),key;
		var data = {
			name :$('#name').val(), 
			tel :$('#tel').val(), 
			address :$('#address').val()
		};
		var time = new Date().getTime();
		// console.log(typeof JSON.stringify(data))
		if($this.attr('key')) {
			
			key = $this.attr('key');
			console.log(key);
			localStorage.setItem(key,JSON.stringify(data));
			$this.removeAttr('key');
			// alert(22)
		} else {localStorage.setItem(time,JSON.stringify(data));}
		
		$('input').val('');
		initTable();
		// $('#name').val('');
		// $('#address').val('');
		// $('#tel').val('');
	};
	var onDelBtnClick = function() {
		var $this = $(this),
			key = $this.attr('id');
			// console.log(key);
		if(confirm('确认删除吗？？？！！')) {
			localStorage.removeItem(key);
		};
		initTable();
	};
	var onUpDateBtnClick = function() {
		var $this = $(this),
			key = $this.attr('id'),
			obj = JSON.parse(localStorage.getItem(key));
		// console.log(obj)	
		$('#name').val(''+obj.name+'');
		$('#tel').val(''+obj.tel+'');
		$('#address').val(''+obj.address+'');
		$('#saveBtn').attr('key',key)

		// onSaveBtnOnclick(key);


		// localStorage.setItem(key)
	};
	var onSearchBtnCilck = function() {
		var val = $('.search').val();
		$('.search').val('');
		initTable(val);

	}

	init();
}(window,undefined,jQuery)