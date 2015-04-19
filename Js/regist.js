$(document).ready(function() {
	console.log('ready');

	var error_hide = function() {
		$(".error").hide();
	}

	var error_show = function(error_code) {
		$("#" + error_code).show();
	}

	var success = function() {
		$("#form").hide();
		$("#success").show();

	}

	$("#submit").click(function() {
		error_hide();
		var username = $("#username").val();
		var password = $("#password").val();
		var repassword = $("#repassword").val();
		var flag = true;
		if (!username) {
			error_show("error-username-empty");
			flag = false;
		}
		if (!password || password.length < 6) {
			error_show("error-password-short");
			flag = false;
		}
		if (!repassword || password != repassword) {
			error_show("error-repassword");
			flag = false;
		}
		if (flag == false) return;
		var data = { "Username":username , "Password":password};
		$.post("/Ajax/Reg", data, function(result) {
			switch (result.desc) {
				case 1:
					error_show("error-username-exist");
					break;
				case 2:
					error_show("error-password-short");
					break;
				case 0:
					$.post("/Ajax/Login", data, function(result){
						success();
						setTimeout(function(){
							location.href = "/";
						}, 2000);
					}, "json");
					break;
			}
		}, "json");

	});
});