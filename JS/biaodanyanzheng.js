var submitBtn = $w('submitBtn');
submitBtn.onclick = checkForm;
function checkForm() {
	var name = $w('name').value;
	var age = $w('age').value;
	var email = $w('email').value;
	var phone =$w('phone').value;

	if (name.replace(/(^\s+)|(\s+$)/g,"")=='') {
		alert('请输入姓名')
		return false;
	}

	if ($w.trim(age)==''||isNaN(age)) {
		alert('您输入的年龄不合法')
		return false;
	};

	// var reg  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

	if ($w.trim(email)==''||!($w.isEmail(email))) {
		alert('请输入正确的邮箱')
		return false
	};
	// if (reg.test(email)) {
	// 	alert('正确')
	// }else{
	// 	alert('邮箱错误')
	// 	 return false;
	// 	}



	alert('成功')
}