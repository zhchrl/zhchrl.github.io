+function(window,document,$,undefined) {
	var $tbody = $('#tbody');
	var init = function() {
		initEvent();
		initTable();
	};
	var initEvent = function() {
		$('#saveBtn').off('click').on('click',onSaveBtnOnclick);
		$('#tbody').on('click','.del-btn',onDelBtnClick);
		$('#tbody').on('click','.update-btn',onUpDateBtnClick);
	};
	var initTable = function() {
		var i=0,trs=[];
		// console.log(store.getAll());
		store.forEach(function(key,val) {
				i++;
			// console.log(key ,'==' ,val);
				trs.push(
				'<tr>',
					'<td>',i,'</td>',
					'<td>',val.name,'</td>',
					'<td>',val.tel,'</td>',
					'<td>',val.address,'</td>',
					'<td><a id="',key,'" class="del-btn" href="javascript:;">删除</a>&nbsp<a href="javascript:;" class="update-btn" id="',key,'">修改</a></td>',
				'</tr>'	
				);
		});
		$('#tbody').html(trs.join(''));


		// var len = localStorage.length,
		// 	tmpKey,tmpVal,i,trs=[];
		// for(i=0;i<len;i++) {
		// 	tmpKey = localStorage.key(i);
		// 	tmpVal = JSON.parse(localStorage.getItem(tmpKey));
		// 	console.log(typeof tmpVal)

		// 	console.log(tmpKey,tmpVal);
		// 	trs.push(
		// 		'<tr>',
		// 			'<td>',i+1,'</td>',
		// 			'<td>',tmpVal.name,'</td>',
		// 			'<td>',tmpVal.tel,'</td>',
		// 			'<td>',tmpVal.address,'</td>',
		// 			'<td><a id="',tmpKey,'" class="del-btn" href="javascript:;">删除</a>&nbsp<a href="javascript:;" class="update-btn" id="',tmpKey,'">修改</a></td>',
		// 		'</tr>'	
		// 		);
			

		// };
		// $('#tbody').html(trs.join(''));
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
			// console.log(key);
			store.set(key,data);
			$this.removeAttr('key');
			// alert(22)
		} else {store.set(time,data);}
		
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
			store.remove(key);
		};
		initTable();
	};
	var onUpDateBtnClick = function() {
		var $this = $(this),
			key = $this.attr('id'),
			obj = store.get(key);
		// console.log(obj)	
		$('#name').val(''+obj.name+'');
		$('#tel').val(''+obj.tel+'');
		$('#address').val(''+obj.address+'');
		$('#saveBtn').attr('key',key)

		// onSaveBtnOnclick(key);


		// localStorage.setItem(key)
	}

	init();
}(window,undefined,jQuery)