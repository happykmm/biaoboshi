
$(document).ready(function() {
	console.log('document is ready');

    /****************
     * 开启轮播 
     ****************/
    $('.banner').unslider({
    	speed: 200,               //  The speed to animate each slide (in milliseconds)
		delay: 4000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true,             //  Support responsive design. May break non-responsive designs
		pause: false
    });




    /*******************
     * 评论相关 
     *******************/
    var appendComment = function(item) {
	    var div_item = $('<div class="item"></div>');
		var div_touxiang = $('<div class="touxiang"><img src="/Image/index_touxiang.png" alt=""></div>');
		var div_itemmain = $('<div class="itemmain"></div>'); 
		var div_username = $('<div class="username"></div>').text(item.username);
		var div_date     = $('<div class="date"></div>').text(item.date);
		var div_content  = $('<div class="content"></div>').text(item.content);
		div_itemmain = div_itemmain.append(div_username, div_date, div_content);
		div_item = div_item.append(div_touxiang, div_itemmain);
		$("#comment-main").append(div_item);
		var img = $('<img src="/Image/index_line.png" alt="" class="line">');
		$("#comment-main").append(img);
    };

    $.get("/Ajax/GetComment/0/3", function(result){
    	var comments = result.data;
    	$.each(comments, function(i, item){
    		appendComment(item);
    	});
    }, "json");

    $("#loadmore").click(function(){
    	$.get("/Ajax/GetComment/3/10", function(result){
	    	var comments = result.data;
	    	$.each(comments, function(i, item){
	    		appendComment(item);
	    	});
	    }, "json");
	    $(this).hide();
    });

    $("#addcomment #submit").click(function() {
    	$("#comment-result label").hide();
    	var content = $("#addcontent").val();
    	var data = {"Content":content};
    	$.post("/Ajax/AppendComment", data, function(result) {
    		switch (result.desc) {
    			case 0:
    				$("#comment-success").show();
    				break;
    			case 1:
    				$("#comment-error-login").show();
    				break;
    			default:
    				$("#comment-error-other").show();
    				break;
    		}
    	}, "json");
    });


});