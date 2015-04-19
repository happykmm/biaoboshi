<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>标博士网站 - 首页</title>
	<link rel="stylesheet" href="/Css/init.css">
	<link rel="stylesheet" href="/Css/common.css">
	<link rel="stylesheet" href="/Css/regist.css">
	
</head>
<body id="regist">
	<div id="container">
		<img id="icon" src="/Image/common_icon.png" alt="">
		<div id="title">
			<div class="left">用户注册</div>
			<div class="right">
				<a href="/Login">已有账号，登录</a>/
				<a href="/">返回首页</a>
			</div>
		</div>
		<div id="line"></div>
		<div id="form">
			<div class="row" id="row-usr">
				<label class="label-90" for="username">用户名</label>
				<input class="text" id="username" type="text" placeholder="请输入你的账号登录名字">
				<label class="error" id="error-username-empty">用户名不能为空</label>
				<label class="error" id="error-username-exist">用户名已经存在</label>
			</div>
			<div class="row" id="row-pwd">
				<label class="label-90" for="password">设置密码</label>
				<input class="text" id="password" type="password" placeholder="请设置您的账号登录密码">
				<label class="error" id="error-password-short">密码至少6位</label>
			</div>
			<div class="row" id="row-repwd">
				<label class="label-90" for="repassword">确认密码</label>
				<input class="text" id="repassword" type="password" placeholder="请设置您的账号登录密码">
				<label class="error" id="error-repassword">密码不一致</label>
			</div>
			<div id="confirm">
				<input id="confirm-box" type="checkbox" checked="true">
				<label for="confirm-box">我已阅读并同意<a href="">（用户协议）</a></label>
			</div>
			<div class="row">
				<a href="javascript:void(0)"><div id="submit">免费创建账号</div></a>
			</div>
		</div>
		<div id="success">
			<h3>恭喜！您已经注册成功！</h3>
			3秒后转到首页...
		</div>
	</div>
	<div id="common-end" class="absolute">
		<div style="background-image: url(/Image/common_end.png);"></div>
	</div>
	<script src="Js/jquery.js"></script>
	<script src="Js/placeholders.js"></script>
	<script src="Js/regist.js"></script>
</body>
</html>