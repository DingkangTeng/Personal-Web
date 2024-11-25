<!DOCTYPE HTML>
<!--
	Multiverse by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>小飞机</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
        <link href="../images/ico.ico" rel="shortcut icon">
	</head>
	<body>

		<!-- Wrapper -->
			<div id="wrapper">
				<?php
					include 'phpqrcode.php';
					$checklogin = "1a2fccd10cb7efad5ffdfcb6e733f569df58bd6d";
					$checkpass = "1321fefd21a13d8b0d828c11bf575a0a078a69e3";
					@$hashlogin = hash('ripemd160', $_POST["login"]);
					@$hashpass = hash('ripemd160', $_POST["password"]);
					$check=false;
					if ($checklogin==$hashlogin && $checkpass==$hashpass) { $check=true; }
				?>
				<!-- Header -->
					<header id="header">
						<h1><strong><?php if(!$check){echo "未输入账号密码或账号密码错误";}else{echo"验证成功";}?></strong></h1>
						<nav>
							<ul>
								<li><a href="#footer" class="icon fa-info-circle"><?php if(!$check){echo "点我输入账号密码";}?></a></li>
							</ul>
						</nav>
					</header>

				<!-- 主体部分 -->
				<?php
					if($check){
						QRcode::png('ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmOGU2ZTg0OGM5ZmQ0OWUyYjQ3ZjIwYjU4N2U2YTVmOQ@35.203.41.102:1381/?plugin=obfs-local%3bobfs%3dhttp%3bobfs-host%3dtlu.dl.delivery.mp.microsoft.com%3bfast-open%3dtrue#GCP+KobeAX+Montreal+STD+NT40','QRcode/qrcode01.png','H',100,1);
					} else {
						QRcode::png('NULL','QRcode/qrcode01.png','H',100,1);
					}
				?>
					<div id="main">
						<article class="thumb">
							<a href="<?php if($check){ echo"QRcode/qrcode01.png"; } ?>" class="image"><img src="<?php if($check){ echo"QRcode/qrcode01.png"; } ?>s" alt="" /></a>
							<h2>KobeAX</h2>
							<p>测试</p>
						</article>
						<!--
						<article class="thumb">
							<a href="images/03.jpg" class="image"><img src="images/03.jpg" alt="" /></a>
							<h2>华中农业大学“永业行杯”土地资源管理本科生村级土地利用规划技能大赛</h2>
							<p>2018·一等奖<br></p>
						</article>
						<article class="thumb">
							<a href="images/04.jpg" class="image"><img src="images/04.jpg" alt="" /></a>
							<h2><a href="achievements/04.pdf" target="_blank" style="null">“华夏土地杯”第一届全国大学生土地利用规划技能大赛</a></h2>
							<p>2018·二等奖<br></p>
						</article>
						<article class="thumb">
							<a href="images/05.jpg" class="image"><img src="images/05.jpg" alt="" /></a>
							<h2><a href="achievements/05.pdf" target="_blank" style="null">第二届全国土地资源管理专业大学生不动产估价技能大赛</a></h2>
							<p>2018·三等奖<br></p>
						</article>
						-->
					</div>
					<div style="text-align: center;">
					</div>

					<!-- 密码区 -->
					<footer id="footer" class="panel">
						<div class="inner split">
							<div>
								<section>
									<!--<h2>Magna feugiat sed adipiscing</h2>
									<p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>-->
								</section>
								<section>
								</section>
								<p class="copyright">
									&copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
								</p>
							</div>
							
							<div>
								<section>
									<h2>总感觉这个地方缺点啥</h2>
									<form method="post" action="#">
										<!-- 半截的那种表单
										<div class="field half first">
											<input type="text" name="name" id="name" placeholder="按标题查找" />
										</div>
										<div class="field half">
											<input type="text" name="author" id="author" placeholder="按作者查找" />
										</div>
										-->
										<div class="field">
											<input type="text" name="login" placeholder="账号">
										</div>
										<div class="field">
											<input type="password" name="password" placeholder="密码">
										</div>
										<ul class="actions">
											<li><input type="submit" name="submit" value="验证" class="special"></li>
											<li><input type="reset" value="重置" /></li>
										</ul>
									</form>
								</section>
							</div>
							
						</div>
					</footer>
                    

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>