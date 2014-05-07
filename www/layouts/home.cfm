<cfoutput> <!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<cf_metaTags>

	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

	<cf_vin65GlobalAssets>

	<cf_css files="/assets/css/screen.min.css">
	
	<!--[if lt IE 9]>
		<script src="/assets/js/html5shiv-printshiv.js"></script>
		<script src="/assets/js/respond.min.js"></script>
	<![endif]-->

</head>
<body>

	<header class="primary v65-group">
		<div id="user-tools">
			<cf_modalCart>	
			<cf_login>
		</div><!--/user-tools-->
		
		<h1 class="logo hideText">
			<a href="/" accesskey="h"><cf_websiteName></a>
		</h1>
		
		<nav class="mainMenu">
			<cf_layoutHeaderNav depth="2">
			<a href="##footerMenu" class="footerMenuLink"><i class="icon-menu"></i></a>
		</nav>
	</header>

	<section class="content homepageContent v65-group">
		<a class="backToTop" href="##"><i class="icon-up-bold"></i>TOP</a>
		
		<div id="slider"></div>
				
		<article class="homepageText">
			<cf_mainContent>
		</article>
		
		<div class="homepageProductGroup">
			<cf_product_group code="HomepageProductGroup">
		</div>
	</section><!--/homepageContent-->
	
	<footer>
		<a name="footerMenu"></a>

		<nav>
			<cf_layoutFooterNav>
		</nav>

		<div class="footerTools"> 
			<cf_contentBlock group="Footer Contact Details">
			
			<ul class="legal">
				<li><cf_copyright></li>
				<li><cf_vin65Accolade></li>
			</ul>
		</div><!--/footerTools-->
	</footer>

	<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
