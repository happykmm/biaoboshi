$(document).ready(function(){

	$("#inputSubmit").click(function(){
		var username = $("#inputUsername").val();
		var password = $("#inputPassword").val();
		if (username=="" || password=="") {
			console.log("Info not complete");
			return;
		} 
		var data = {
			"Username" : username,
			"Password" : password
		};
		$.post("/Admin/Ajax/Login", data, function(result){
			console.log(result);
			if (result.desc != 0) {
				alert("用户名或密码错误！");
			} else {
				location.href = "/Admin/Console";
			}
		}, "json");
	});

});