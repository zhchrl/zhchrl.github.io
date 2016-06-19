!function(window,document,$,undefined) {
	var $maskerWpId = $('#maskerWpId');
	var cache = {};
	var pagesize=5;


	var bindEvent = function() {
		$('#newUserBtn').off('click').on('click',onNewUserBtnClick);
		$('#submitBtn').off('click').on('click',onSubmitBtnClick);
		$('.del-btn').off('click').on('click', onDelBtnClick);
		$('.update-btn').off('click').on('click',onUpDateBtnClick);
		$('.del-btn').off('click').on('click',onDelBtnClick);
		$('#search').off('click').on('click',onSearchClick)

	};
	var onSearchClick = function() {
		var $input = $('#key'),
			val = $input.val(),
			url = 'http://dohtml5.duapp.com/php/wbc2/userList.php?callback=?',
			param = {
				query:val,
				// size:6
			};
		$.get(url,param,function(response){

				// console.log(response);
				var data = response.data,
				trs = [];
				$.each(data,function(i,obj){
					// console.log(obj)
					trs.push(
						'<tr>',
							'<td>',obj.id,'</td>',
							'<td>',obj.username,'</td>',
							'<td>',obj.password,'</td>',
							'<td>',obj.name,'</td>',
							'<td>',obj.age,'</td>',
							'<td>',obj.gender,'</td>',
							'<td>',obj.email,'</td>',
							'<td>',obj.c_date,'</td>',
							'<td>',
								'<button uname="',obj.name,'" uid="',obj.id,'" class="del-btn">删除</button>&nbsp;',
								'<button uid="',obj.id,'" class="update-btn">修改</button>',
							'</td>',
						'</tr>'
					);
					$('#userList').html(trs.join(''))
					// cache[obj.id] = obj;
					// console.log(cache)
					// console.log(trs)
				})
		bindEvent();
				
			
		},'json');
		bindEvent();
		// renderTale()
	};

	var paging = function(total,currPage) {
		var totalPage = Math.ceil(total/pagesize),
			lis=[],
			i=0,
			maxlen=9;
		currPage = currPage||0;


		// lis.push('<li page="0">,1,</li>');
	
		// lis.push('<li page="', (totalPage - 1), '">', totalPage, '</li>');
		// console.log(lis)

		for(;i<totalPage;i++) {
			
				if(i==currPage) {

					lis.push('<li page="', i ,'" class="active">',(i+1),'</li>')
				} else {
					lis.push('<li page="', i ,'">',(i+1),'</li>')

				}
		$('.page')
			.html(lis.join(''))
			.find('li')
			.on('click',onPageLiClick)		
		}
	}






	var onPageLiClick = function() {

		var $this = $(this),
			pager = $this.attr('page');
			console.log(pager);
			param = {
				size:pagesize,
				page:pager
			}
			url = 'http://dohtml5.duapp.com/php/wbc2/userList.php?callback=?';
		$.get(url,param,function(response){
			// console.log(response)
			var data = response.data,
				total = response.total,
				trs = [];
				paging(total,pager);
				console.log(total);
				$.each(data,function(i,obj){
					// console.log(obj)
					trs.push(
						'<tr>',
							'<td>',obj.id,'</td>',
							'<td>',obj.username,'</td>',
							'<td>',obj.password,'</td>',
							'<td>',obj.name,'</td>',
							'<td>',obj.age,'</td>',
							'<td>',obj.gender,'</td>',
							'<td>',obj.email,'</td>',
							'<td>',obj.c_date,'</td>',
							'<td>',
								'<button uname="',obj.name,'" uid="',obj.id,'" class="del-btn">删除</button>&nbsp;',
								'<button uid="',obj.id,'" class="update-btn">修改</button>',
							'</td>',
						'</tr>'
					);
					$('#userList').html(trs.join(''))
					// cache[obj.id] = obj;
					// console.log(cache)
					// console.log(trs)
				})
				bindEvent();

		},'json')

	}






	var onUpDateBtnClick = function() {
		var $this=$(this),
		uid = $this.attr('uid'),
		// console.log(uid);
		obj = cache[uid];
		// console.log(obj)

		$('#username').val(obj.username);
		$('#password').val(obj.password);
		$('#name').val(obj.name);
		$('#age').val(obj.age);
		$('input[name=gender]:checked').val(obj.gender);
		$('input[name=id]').val(uid);
		// console.log($('#username')[0].value)
		/*param = {
			username:$('#username').val(obj.username),
			password:,
			name:,
			age:,
			gender:,
			id:uid
		},*/
		// url = "http://dohtml5.duapp.com/php/wbc2/updateUser.php";
		// console.log($this);
		$maskerWpId
			.show()
			.find('#submitBtn').text('修改').attr('class','subtn');
	};

	$('#cancelBtn').on('click',function(){
		$maskerWpId.hide();
	})

	var onDelBtnClick = function() {
		var $this = $(this);
		var $uid = $this.attr('uid');
		var uname = $this.attr('uname');
		console.log(uname);
		var result;
		result = confirm('即将删除"'+uname+'"了');
		if(result){
			var url='http://dohtml5.duapp.com/php/wbc2/delUser.php?callback=?';
			var param ={id:$uid};
			$.get(url,param,function(data){
				if(data.success){
					// alert(12)
				};
			},'json');
			renderTale();

		
		}else{
			alert("没有删除")
		};
		};



		
		
	var onSubmitBtnClick = function() {


		

		if ($('#submitBtn').hasClass('subtn')) {
			var url = 'http://dohtml5.duapp.com/php/wbc2/updateUser.php?callback=?',
				param = $('#maskerWpId form').serialize();
		} else {
			var url = 'http://dohtml5.duapp.com/php/wbc2/reg.php?callback=?';
            
			
			var param = {
				username :$("#username").val(),
				password :$("#password").val(),
				name:$("#name").val(),
				age :$("#age").val(),
				gender:$("input[name=gender]:checked").val()
			};

		};
		
		

		// var param = $('#maskerWpId form').serialize();
		console.log(param);

// return;

		$.get(url,param,function(data){
			if(data.success) {
				
				renderTale();
				$maskerWpId.hide();
			}else {
				alert('搞错了哦')
			};
		},'json')

	};

	var onNewUserBtnClick = function() {
		$('#maskerWpId input:not([type=radio])').val('');
        $maskerWpId
            .find('[id=submitBtn]').text('新增2').attr('class', 'new-btn')
            .end()
            .show();
	};

	var renderTale = function() {
		var url = 'http://dohtml5.duapp.com/php/wbc2/userList.php?callback=?';
		var param = {size:pagesize}
		$.get(url,param,function(response){
			// console.log(response)
			var data = response.data,
				total = response.total,
				trs = [];
				paging(total,'');
				console.log(total);
				$.each(data,function(i,obj){
					// console.log(obj)
					trs.push(
						'<tr>',
							'<td>',obj.id,'</td>',
							'<td>',obj.username,'</td>',
							'<td>',obj.password,'</td>',
							'<td>',obj.name,'</td>',
							'<td>',obj.age,'</td>',
							'<td>',obj.gender,'</td>',
							'<td>',obj.email,'</td>',
							'<td>',obj.c_date,'</td>',
							'<td>',
								'<button uname="',obj.name,'" uid="',obj.id,'" class="del-btn">删除</button>&nbsp;',
								'<button uid="',obj.id,'" class="update-btn">修改</button>',
							'</td>',
						'</tr>'
					);
					$('#userList').html(trs.join(''))
					cache[obj.id] = obj;
					// console.log(cache)
					// console.log(trs)
				})
				bindEvent();

		},'json')
	}

renderTale();
}(window,document,jQuery)