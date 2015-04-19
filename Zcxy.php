<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>知产学院</title>
	<link rel="stylesheet" href="/Css/init.css">
	<link rel="stylesheet" href="/Css/common.css">
	<link rel="stylesheet" href="/Css/change-city.css">
	<link rel="stylesheet" href="/Css/zcxy.css">
</head>
<body>
	
	<?php include(__DIR__.'/Include/common-top.php'); ?>

	<div id="container">
		<div id="left">
			<div class="title">知产学院
			</div>
			<a href="javascript:void(0)"><div class="row">
				商标新闻
			</div></a>
			<div class="line"></div>
			<a href="javascript:void(0)"><div class="row">
				专利新闻
			</div></a>
			<div class="line"></div>
			<a href="javascript:void(0)"><div class="row">
				版权新闻
			</div></a>
			<div class="line"></div>
			<a href="javascript:void(0)"><div class="row">
				商标法规
			</div></a>
			<div class="line"></div>
			<a href="javascript:void(0)"><div class="row">
				专利法规
			</div></a>
			<div class="line"></div>
			<a href="javascript:void(0)"><div class="row">
				版权法规
			</div></a>
			<div class="line"></div>
			<a href="javascript:void(0)"><div class="row">
				其他行业
			</div></a>
		</div>
		<div id="right">
			<div class="title">
				知产学院><span id="category">版权法规</span>
			</div>
			<div class="line">	
			</div>
			<div class="content">
				<ul id="list">
					<a href="javascript:void(0)">
						<li>
							<span id="item-title">日媒：国际商标或可用汉字注册 亚洲品牌迎利好... ...</span> 
							<span id="item-date">2015/3/4</span>
						</li>
					</a>
					<a href="javascript:void(0)">
						<li>
							<span id="item-title">日媒：国际商标或可用汉字注册 亚洲品牌迎利好... ...</span> 
							<span id="item-date">2015/3/4</span>
						</li>
					</a>
					<a href="javascript:void(0)">
						<li>
							<span id="item-title">日媒：国际商标或可用汉字注册 亚洲品牌迎利好... ...</span> 
							<span id="item-date">2015/3/4</span>
						</li>
					</a>
				</ul>
			</div>
		</div>
	</div>

	<script src="Js/jquery.js"></script>
	<script src="Js/jquery.cookie.js"></script>
	<script src="Js/placeholders.js"></script>
	<script>
		var AreaSuggest = '<?= $this->AreaSuggest ?>';
		var AreaMenu = JSON.parse('<?= json_encode($this->AreaMenu); ?>');
		var username = '<?= $this->Username ?>';
	</script>
	<script src="Js/common.js"></script>
	<script src="Js/change-city.js"></script>
</body>
</html>