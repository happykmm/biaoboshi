
$(document).ready(function() {

    /*******************
     * 用户状态相关 
     *******************/
    if (!!username) {
    	$("#common-nav #username").text(username);
        $("#common-nav #username").show();
    	$("#common-nav #logout").show();
        $("#common-nav #login").hide();
    } else {
    	$("#common-nav #username").hide();
        $("#common-nav #logout").hide();
        $("#common-nav #login").show();
    }

    $("#common-nav #logout").click(function() {
    	$.get("/Ajax/Logout", function(result) {
    		$("#common-nav #username").hide();
    		$("#common-nav #logout").hide();
            $("#common-nav #login").show();
    	}, "json");
    });
    
});