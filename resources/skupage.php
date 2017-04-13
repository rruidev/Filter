<!DOCTYPE html>
<html>
<head>
	<title>E - Commerce Sku page</title>

	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="../css/style.css"/>

	<script src="https://code.jquery.com/jquery-3.2.1.min.js"
  	integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  	<script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/skuscript.js"></script>
</head>
<body>
	<header>
		<?php include("../resources/header.php") ?>
	</header>
	<div class="skupage-main-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<div class="container">
			<div class="sku-container pull-left">
				<form id="form1" nonvalidate>
					<div class="sku-container-header">
						<h1 class="product_name"></h1>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sku-container-body product_information">
						<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 sku-image"></div>
						<div class="col-xs-12 col-sm-6 col-md-9 col-lg-9">
							<table class="table table-user-information">
	            				<tbody>
			                      	<tr>
			                        	<td><strong>Product Details :</strong></td>
			                        	<td>
			                        		<span class="skudesc"></span>
			                        	</td>
			                      	</tr>
			                      	<tr>
			                        	<td><strong>Price :</strong></td>
			                        	<td>
			                        		<label>Original Price : </label><span class="originalprice"></span>  | 
			                        		<label>Sale Price :</label><span class="saleprice"></span>
			                        	</td>
			                      	</tr>
			                      	<tr>
			                        	<td><strong>Product size :</strong></td>
			                        	<td>
			                        		<select class="form-control" id="product_size" required>
												<option>XS</option>
												<option>S</option>
												<option>M</option>
												<option>L</option>
												<option>XL</option>
											</select>
			                        	</td>
			                      	</tr>
			                      	<tr>
			                        	<td><strong>Quantity :</strong></td>
			                        	<td>
			                        		<div class="form-group">
			                        			 <input type="number" min="1" max="100" class="form-control" id="product_qty" required>
			                        		</div>
			                        	</td>
			                      	</tr>
			                      	<tr>
			                        	<td><strong>Color :</strong></td>
			                        	<td>
			                        		<select class="form-control" id="product_color" required>
			                        			<option  value="Red">Red <span class="red">&nbsp;</span></option>
			                        			<option  value="Pink">Pink <span class="pink"></span></option>
			                        			<option  value="Black">Black <span class="black"></span></option>
			                        			<option  value="Gray">Gray <span class="gray"></span></option>
			                        		</select>
			                        	</td>
			                      	</tr>
			                      	<tr>
			                        	<td></td>
			                        	<td class="text-right">
			                        		<button id="submit1" class="btn btn-success">Submit</button>
			                        	</td>
			                      	</tr>
			                    </tbody>
			                </table>
						</div>
					</div>
				</form>
				<form id="form2" nonvalidate>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sku-container-body product_address">
						<div class="col-xs-6">
							<div class="form-group">
							    <label for="email">Address Line 1</label>
							    <input type="text" class="form-control" id="address1" required>
						  	</div>
						  	<div class="form-group">
							    <label for="pwd">Address Line 2</label>
							    <input type="text" class="form-control" id="address2" required>
						  	</div>
					  		<div class="form-group">
						    	<label for="pwd">City</label>
							    <input type="text" class="form-control" id="City" required>
						  	</div>
						  	<div class="form-group">
						    	<label for="pwd">State</label>
							    <input type="text" class="form-control" id="State" required>
						  	</div>
						  	<div class="form-group">
						    	<label for="pwd">Zipcode</label>
							    <input type="text" class="form-control" id="Zipcode" required>
						  	</div>
						  	<div class="form-group text-right">
						  	<button type="submit" id="submit2" class="btn btn-success">Finish</button>
						  	</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sku-container-body product_summery">
						<table class="table table-user-information">
            				<tbody>
		                      	<tr>
		                        	<td><strong>Product Name :</strong></td>
		                        	<td>
		                        		<span id="product_name_Summery"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product Price :</strong></td>
		                        	<td>
		                        		<span id="product_price_Summery"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product size :</strong></td>
		                        	<td>
		                        		<span id="product_size_Summey"></span>
		                        	</td>
		                      	</tr
		                      	<tr>
		                        	<td><strong>Product Quantity :</strong></td>
		                        	<td>
		                        		<span id="product_qty_Summey"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product Color :</strong></td>
		                        	<td>
		                        		<span id="product_color_Summey"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product Address Line 1 :</strong></td>
		                        	<td>
		                        		<span id="product_addr1_Summey"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product Address Line 2 :</strong></td>
		                        	<td>
		                        		<span id="product_addr2_Summey"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product City :</strong></td>
		                        	<td>
		                        		<span id="product_City_Summey"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product State :</strong></td>
		                        	<td>
		                        		<span id="product_State_Summey"></span>
		                        	</td>
		                      	</tr>
		                      	<tr>
		                        	<td><strong>Product Zipcode :</strong></td>
		                        	<td>
		                        		<span id="product_Zip_Summey"></span>
		                        	</td>
		                      	</tr>
			                </tbody>
			            </table>
			            <div class="form-group text-right">
			            	<button class="btn btn-success">Submit Order</button>
			            </div>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>