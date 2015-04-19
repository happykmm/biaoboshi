$(document).ready(function() {
	console.log('ready');

	var login_success = function() {
		location.href = "/";
	}

	var login_error = function() {
		alert("用户名和密码不匹配！");
	}

	$("#submit").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();
		var data = {"Username":username, "Password":password};
		$.post("/Ajax/Login", data, function(result) {
			console.log(result);
			switch (result.desc) {
				case 0:
					login_success();
					break;
				default:
					login_error();
					break;
			}
		}, "json");
	});

});