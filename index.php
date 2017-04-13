<!DOCTYPE html>
<html>
<head>
	<title>This is E Commerce site</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css"/>

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" 
	integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/script.js"></script>
</head>
<body>
	<header>
		<?php include("resources/header.php") ?>
	</header>
	<div id="main-container" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
		   <!-- Indicators -->
		   <ol class="carousel-indicators">
		      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		      <li data-target="#myCarousel" data-slide-to="1"></li>
		      <li data-target="#myCarousel" data-slide-to="2"></li>
		      <li data-target="#myCarousel" data-slide-to="3"></li>
		   </ol>
		   <!-- Wrapper for slides -->
		   <div class="carousel-inner" role="listbox">
		      <div class="item active">
		         <img src="images/carousel/pic1.jpg" alt="Chania" width="460" height="345">
		         <div class="carousel-caption">
		            <h3>Chania</h3>
		            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
		         </div>
		      </div>
		      <div class="item">
		         <img src="images/carousel/pic2.jpg" alt="Chania" width="460" height="345">
		         <div class="carousel-caption">
		            <h3>Chania</h3>
		            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
		         </div>
		      </div>
		      <div class="item">
		         <img src="images/carousel/pic3.jpg" alt="Flower" width="460" height="345">
		         <div class="carousel-caption">
		            <h3>Flowers</h3>
		            <p>Beatiful flowers in Kolymbari, Crete.</p>
		         </div>
		      </div>
		      <div class="item">
		         <img src="images/carousel/pic4.jpg" alt="Flower" width="460" height="345">
		         <div class="carousel-caption">
		            <h3>Flowers</h3>
		            <p>Beatiful flowers in Kolymbari, Crete.</p>
		         </div>
		      </div>
		   </div>
		   <!-- Left and right controls -->
		   <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		   <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		   <span class="sr-only">Previous</span>
		   </a>
		   <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		   <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		   <span class="sr-only">Next</span>
		   </a>
		</div>
		<div class="productile col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<a href="resources/skupage.php?pid=E201C5">
					<div class="tiles">
						<div class="tile-header">
							<img src="../images/products/product1.jpg">
						</div>
						<div class="tile-footer">
							<h5>Mens T-shirt</h5>
						</div>
					</div>
				</a>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<a href="resources/skupage.php?pid=E401C6">
					<div class="tiles">
						<div class="tile-header">
							<img src="../images/products/product2.jpg">
						</div>
						<div class="tile-footer">
							<h5>Women Dress</h5>
						</div>
					</div>
				</a>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<a href="resources/skupage.php?pid=E501C0">
					<div class="tiles">
						<div class="tile-header">
							<img src="../images/products/product3.jpg">
						</div>
						<div class="tile-footer">
							<h5>Mens Shirt</h5>
						</div>
					</div>
				</a>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
				<a href="resources/skupage.php?pid=E801C5">
					<div class="tiles">
						<div class="tile-header">
							<img src="../images/products/product4.jpg">
						</div>
						<div class="tile-footer">
							<h5>Mens Pant</h5>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</body>
</html>