!function(window,document,$,undefined) {
	var url = "http://dohtml5.duapp.com/php/wbc2/getPlace.php?callback=?";
	var init =  function() {
		initEvent();
		getDate();
	};
	var initEvent = function(){
		$('#province').on('change',onProvinceChange);
		$('#city').on('change',onCityChange);
	};
	var onProvinceChange =function() {
		var val = this.value;
		getDate(val,'city');
	};
	var onCityChange = function() {
		var val = this.value;
		getDate(val,'area');
	}
	var getDate = function(id,renderId) {
		var param;
		renderId = renderId||'province';
		if (id) {
			param = {id:id};
		};
		$.get(url,param,function(data){
			render(data,renderId);
		},'json');
	};
	var render = function(date,renderId) {
		var opts = [];
		$.each(date,function(i,obj) {
			opts.push('<option value=" ',obj[renderId+'ID'],' ">',obj[renderId],'</option>');
		});
		$('#'+renderId).html(opts.join(''));
	};
	init();
}(window,document,jQuery)