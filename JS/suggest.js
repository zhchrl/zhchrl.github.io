!function(window,document,$,undefined) {

	var data = [
		{"name":"中国"},
		{"name":'中国人'},
		{"name":'中国人民银行'},
		{"name":'中国银行'},
		{"name":'中国建设银行'},
		{"name":'中国人民大会堂'},
		{"name":'中国好声音'},
		{"name":'中国人民天下无敌'},
		{"name":'中国打倒小日本'},
		{"name":'中国奥运会'}
	]

	var renderSuggest = function() {


			var $searchWp = $('#searchWp');
			var $input = $searchWp.find('input');
			var $ul = $searchWp.find('ul');


			
			$input.on('keyup',function(e){

				var val = this.value;
				var ls ;
				var kCode = e.keyCode;
				var index;
				var len = $ul.find('li').size();
				console.log(len)
				

				if (kCode==38||kCode==40) {
					// len = $ul.find('li').size();
					index = $ul.find('li.hover').index();
					if(index==-1) {
						index = 0;
					}
					else {
						if(kCode==40) {
								index++;
							if(index>=len) {
								index = 0
							}
						}
						if(kCode==38) {
							index--;
							if(index<0) {
								index=len-1;
							}
						}
						
					}
					$ul
					    .find('li:eq(' + index + ')')
						.addClass('hover')
						.siblings('.hover')
						.removeClass('hover');
					this.value = $ul.find('li:eq(' + index + ')').html();

						console.log(index)
						return;
				};

				if(val==''){
					$ul.hide()

				} else {
					ls = renderLi(data,val);
					$searchWp.find('ul').html(ls);
					$ul.show()
				}

			})

			function renderLi(resData,key) {
				var lis = [];
				var name;
				for(var i=0;i<resData.length;i++) {
					name = resData[i].name;
					if(name.indexOf(key)>-1) {
						lis.push("<li>",name,"</li>")
					}
									}
				return lis.join('');
			}

	};

	renderSuggest();



}(window,document,jQuery)