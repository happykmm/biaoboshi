$(document).ready(function() {

	var getcityinfo = function(city) {
		console.log('Ajax is needed to get info of ' + city);

	};

	if ($.cookie('city') != undefined) {
		var city = $.cookie('city');
		$("#cityswitch").text(city);
		getcityinfo(city);
	} else {
		$("#cityswitch").text(AreaSuggest);
		getcityinfo(AreaSuggest);
	}

	/*渲染json，添加城市数据
	 */
	$.each(AreaMenu, function(alpha, citys){ 
		var span = $('<span></span>');
		$.each(citys, function(i, city) {
			var a = $('<a class="isonline" href="javascript:void(0)"></a>').text(city);
			span.append(a);
		});
		$("#change-city .citieslist li#city-" + alpha + " p").append(span);
	}); 



	/*城市选择按钮按下，显示citymenu
	 */
	$('#cityswitch').click(function(event) {
		$('#citymenu').css("display","block");
		event.stopPropagation(); 
		//console.log('citymenu is shown');
	});


	/*城市菜单按下，citymenu不隐藏
	 */
	$('#citymenu').click(function(event) {
		event.stopPropagation();
	});


	/*其他部分按下，citymenu隐藏
	 */
	$('body').click(function() {
		$('#citymenu').css("display","none");
		//console.log('citymenu is hided');
	});


	/*城市群组切换
	 */
	$("#change-city .citieslist h2").hover(function() {
		var citygroup = $(this).attr("class").split(" ")[0];
		$("#change-city .citieslist ol").css("display","none");
		//console.log("#change-city .citieslist ol." + citygroup);
		$("#change-city .citieslist ol." + citygroup).css("display","inline");
	});


	/*城市按下，储存cookie，ajax获取地址信息
	 */
	$("#change-city .citieslist li p a").click(function() {
		var city = $(this).text();
		$("#cityswitch").text(city);
		$.cookie("city", city, {path:"/" , expires:365});
		$('#citymenu').css("display","none");
		getcityinfo(city);
	});

;});