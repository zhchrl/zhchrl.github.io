+function(window,document,$,undefined) {
	var userManageMap = {
		'已报名' :0,
		'已入学' :1,
		'已毕业' :2,
		'已就业' :3,
		'未就业' :4,
		'已退学' :5,
	}

	var treeRootMap = {
		'面试宝典':'面试宝典',
		'面试跟踪':'面试跟踪',
		'学员管理':'<table id="userTable" title="Custom DataGrid Pager" style="width:700px;height:250px" data-options="rownumbers:true,singleSelect:true,pagination:true,fit:true,border:false"  iconCls="icon-save" toolbar="#tb" ></table>'
		}
	
	var initTab = function() {
		$('#tabs').tabs({
			border:false,
			fit:true,
			showHeader:true,
			onAdd:onTabAdd
		});
	};
	var onTabAdd = function(title,index) {
		if(title=='学员管理') {
			initUserTable();
		};

	};

	var init =function() {
		initTree();
		initTab();

		// initUserTable();
		// $("#centerArea").on('click', '#aaa',DelBtnClick)

	};
	var initTree = function() {
		var url = "http://dohtml5.duapp.com/php/wbc3/getMenuData.php?callback=?";
		$("#treeMenu").tree({
			url:url,
			onClick:onTreeNodeClick
		});
	};
	var onTreeNodeClick = function(node) {
		var pid = node.pid,
			text =node.text;
			// text = txt.substr(0,3),
			// code = node.code;
			console.log(text);
		if(pid==0) {
			showNewTab(text);
		} else {
			text = text.substr(0,3);
			initUserTable(userManageMap[text]);
			// alert(22)
		};
		// var maps = {
		// 	100:0,
		// 	101:1,
		// 	102:2,
		// 	103:3,
		// 	104:4,
		// 	105:5
		// };
		// console.log(node)
		// var code = node.code;
		console.log(userManageMap[text])
		// 
		// initUserTable(userManageMap[text]);
	}

	var showNewTab = function(text) {
		var $tabs = $('#tabs');

		// console.log(text);
		if($tabs.tabs('exists',text)) {
			$tabs.tabs('select',text);
			if(text =='学员管理') {
				initUserTable();
			}
		} 
		else {
			$tabs.tabs('add',{
				title:text,
				content:treeRootMap[text],
				closable:true
			});
		};



	};

	var onDelBtnClick = function() {
		var $this = $(this),
			uid = $this.attr('uid');
		$('#dd').dialog(
			{ 
			title:'自定义提示',
			content:'<div class="del-dialog">确认删除吗</div>',
			width:200,
			height:200,
			modal:true,
			buttons:[
				{text:'确认',handler:function(){
					removeUser(uid)
				}},
				{text:'取消',handler:function(){
					$('#dd').dialog('close');
				} }

			]
			})

	};

	var onUpdataBtnClick = function() {

		var $this = $(this),
			index = $this.attr('index'),
			row;
		row = $('#userTable').datagrid('getRows')[index];
		$('#dd').dialog({
			title:'自定义提示',
			width:380,
			height:290,
			modal:true,
			content:function() {
				return [
					'<div class="updata-dialog">',
						'<div><label>ID:<input id="id" type="text" value="',row.id,'"></label></div>',
						'<div><label>姓名:<input id="name" type="text" value="',row.name,'"></label></div>',

						'<div><label>用户名:<input id="username" type="text" value="',row.username,'"></label></div>',
						'<div><label>密码:<input id="password" type="text" value="',row.password,'"></label></div>',
						'<div><label>年龄:<input id="age" type="text" value="',row.age,'"></label></div>',
						'<div><label>性别:<input id="gender" type="text" value="',row.gender,'"></label></div>',
						'<div><label>邮箱:<input id="email" type="text" value="',row.email,'"></label></div>',
						'<div><label>注册日期:<input type="text" value="',row.c_date,'"></label></div>',
					'</div>',
					'<select id="sel">',
					    '<option value="0">已报名</option>',
					    '<option value="1">已入学</option>',
					   ' <option value="2">已毕业</option>',
					   ' <option value="3">已就业</option>',
					   ' <option value="4">未就业</option>',
					   ' <option value="5">已退学</option>',
					'</select>'

				].join('')
			},

			buttons:[

				{text:'取消',handler:function() {
					$('#dd').dialog('close');
				}},
				{text:'确定并修改',handler:function() {
					// alert(33)
					var url = 'http://dohtml5.duapp.com/php/wbc2/updateUser.php?callback=?',
						param;
						param = {
							id:$('#id').val(),
							username:$('#username').val(),
							password:$('#password').val(),
							name:$('#name').val(),
							age:$('#age').val(),
							gender:$('#gender').val(),
							email:$('#email').val(),
							status:$('#sel').val()
						}
						// console.log(param)
					$.get(url,param,function(response){
						if(response.success) {

							alert('修改请求成功');
							$('#userTable').datagrid('reload');
							$('#dd').dialog('close');
						} else {alert('修改失败请重试')}
					},'json')

				}}

			]

		})

	}



	var initUserTable = function(status) {

		$('#userTable').datagrid({
			
	    url:'http://dohtml5.duapp.com/php/wbc3/userList.php?callback=?',
	    method: 'get',
	    fitColumns:true,
	    striped:true,
	   
	    onLoadSuccess:onLoadSuccess,
	    onBeforeLoad: function(param) {
			if(status||status==0) {
				param.status=status;
				// alert(2)
				}
			
			},
	    loadMsg:'让你瞎点，已在加载，等着吧噢',
	    pageSize:10,
	   
	    columns: [[
	        { field: 'id', title: 'ID', width: 25, align: 'center' },
	        { field: 'username', title: '用户名', width: 70, align: 'center' },
	        { field: 'password', title: '密码', width: 100, align: 'center' },
	        { field: 'name', title: '姓名', width: 100, align: 'center' },
	        { field: 'age', title: '年龄', width: 32, align: 'center' },
	        { field: 'gender', title: '性别', width: 25, align: 'center' },
	        { field: 'email', title: '邮箱', width: 100, align: 'center' },
	        { field: 'c_date', title: '注册时间', width: 130, align: 'left' },
	        { field: 'null', title: '操作', width: 60, align: 'center' ,formatter:function(value,row,index){
	        	// console.log(row);
	        	return '<a class="updata-btn" index="'+index+'"  href="javascript:;">修改</a>&nbsp|&nbsp<a uid="'+row.id+'" class="del-btn" href="javascript:;" class="del-btn">删除</a>'
	        }}  
	    ]]
			});

		// var onBeforeLoad = function(param) {
		// 	if(status||status==0) {
		// 		param.status=status
		// 	}
		// 	// console.log(param)
		// }

	

			
	};
var onLoadSuccess = function() {
		var $userTable = $('.datagrid-view');//选中表格
		$userTable.find('.del-btn').on('click',onDelBtnClick);
		$userTable.find('.updata-btn').on('click',onUpdataBtnClick);

	}
	// init();
	
	var removeUser = function(id) {

		var url='http://dohtml5.duapp.com/php/wbc2/delUser.php?callback=?';
		$.get(url,{id:id},function(response){
			if(response.success) {
				// alert(32)
					$('#userTable').datagrid('reload');
					$('#dd').dialog('close');
					
			}

		},'json')

	}

	



	// $('#newuser').on('click',onNewUserBtnClick);
	var onNewUserBtnClick = function() {

		$('#dd').dialog({
			title:'新增用户自定义提示',
			width:380,
			height:290,
			modal:true,
			content:function() {
				return [
					'<div class="updata-dialog">',
						// '<div><label>ID:<input id="id" type="text" ></label></div>',
						'<div><label>姓名:<input id="name" type="text" ></label></div>',

						'<div><label>用户名:<input id="username" type="text"></label></div>',
						'<div><label>密码:<input id="password" type="text" ></label></div>',
						'<div><label>年龄:<input id="age" type="text" ></label></div>',
						'<div id="gender">',
							'<label>性别:<input name="gender" value="男"  type="radio" checked>男</label>',
							'<label><input name="gender" value="女" type="radio" >女</label>',
						'</div>',
						'<div><label>邮箱:<input id="email" type="text" ></label></div>',
						// '<div><label>分类:<input id="status" type="text" ></label></div>',
						
						
					'</div>',

					'<select id="sel">',
					    '<option value="0">已报名</option>',
					    '<option value="1">已入学</option>',
					   ' <option value="2">已毕业</option>',
					   ' <option value="3">已就业</option>',
					   ' <option value="4">未就业</option>',
					   ' <option value="5">已退学</option>',
					'</select>'

				].join('')
			},


			buttons:[

				{text:'取消',handler:function() {
					$('#dd').dialog('close');
				}},
				{text:'提交',handler:function() {
					// alert(33)
					var url = 'http://dohtml5.duapp.com/php/wbc2/reg.php?callback=?',
						param;
						param = {
							// id:$('#id').val(),
							username:$('#username').val(),
							password:$('#password').val(),
							name:$('#name').val(),
							age:$('#age').val(),
							// gender:$("input:radio:checked").val(),
							gender:$("input[name=gender]:checked").val(),
							email:$('#email').val(),
							status:$('#sel').val()
						}
						// console.log(param)
					$.get(url,param,function(response){
						if(response.success) {

							// alert('提交请求成功');
							$('#userTable').datagrid('reload');
							$('#dd').dialog('close');
							console.log(param.status);
						} else {alert('提交失败请重试')}
					},'json')

				}}

			]

		})
			console.log($('#sel').val())

		
	}
$(function(){
    $('#newuser').bind('click',onNewUserBtnClick);
});


$(document).ready(init);
}(window,document,jQuery)