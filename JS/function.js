/*根据给出的id,返回dom对象（目前只支持有效id)*/
!function(window,document,undefined) {
	function WBC(id) {
		if (typeof id =='string') {
			return document.getElementById(id) 
		}else{
			return(id)
		};
	}
/*小于10的数字前面加0成为两位数*/
	WBC.fillZero = function(num) {
		return num <10? '0'+ num:num;
	};
	/*兼容所有浏览器的innerText方法*/
	WBC.text = function(dom,text) {
		var len = arguments.length;
		    // text = dom.innerText?dom.innerText:dom.textContent;
		    // textAttr = dom.innerText||dom.textContent;（把值赋值给字符串是错误的）
		if (len==2) {
			// textAttr = text;
			if (dom.innerText) {
				dom.innerText =text;
			} else {
				dom.textContent = text;
			}
		} else if(len==1){
			return dom.innerText||dom.textContent;
			// if (dom.innerText) {
			// 	return dom.innerText;
			// }else {
			// 	return dom.textContent;
			// }
		} else {
			throw 'error arguments'
		}
		// return dom.innerText ? dom.innerText :dom.textContent;
	};
	/*@param date 日期对象
	@return string 被格式化后的字符串，形如：2016年02月26日*/
	WBC.formatDate = function(date) {
		/*var d = new Date;
		date = d.getFullYear()+'年'+$w.fillZero((d.getMonth()+1))+'月'+$w.fillZero(d.getDate())+'日';
		return date;*/
		return [date.getFullYear(),'年',$w.fillZero((date.getMonth()+1)),'月',$w.fillZero(date.getDate()),'日'].join('')
	}
/*@param clsName 样式名
@return [] 含有相同样式名的dom对象数组*/
WBC.byClass = function(clsName) {
	var tmpArr,len,nodes,i;
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(clsName);
	} else {
		tmpArr = [];
		nodes = document.getElementsByTagName('*');
		len = nodes.length;
		for(i=0;i<len;i++) {
			if(nodes[i].className.indexOf(clsName)>-1){
				tmpArr.push(nodes[i]);
			}
		}
		return tmpArr;
	}	
}

/*正则去除字符串两边的空格*/
 
WBC.trim = function(str) {
	return str.replace(/(^\s+)|(\s+$)/g,"");
}

/*正则邮箱验证*/
WBC.isEmail = function(str) {
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return reg.test(str);
}


window.WBC = window.wbc = window.$w = WBC;
}(window,document);