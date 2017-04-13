$(document).ready(function() {
	var productID = '';
	var urlproductID = getUrlParams('pid');
	$.get( "../json/products.json", function( data ) {
	 	var products = data;
	 	$(products).each(function(index, product) {
		   if(product.product_id == urlproductID){
		   		var html = '<img src="'+product.image_path+'" />'
		   		$('.product_name').text(product.product_name);
		   		$('.sku-image').append(html);
		   		$('.skudesc').text(product.product_desc);
		   		$('.originalprice').text(product.product_orig_price);
		   		$('.saleprice').text(product.product_sale_proce);
		   }
		});
	});
	function getUrlParams(name){
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results==null){
	       return null;
	    }
	    else{
	       return results[1] || 0;
	    }
	}
	$("#form1").submit(function(event){
	  	event.preventDefault();
	  	$('.product_name').text("Shipping Address");
	  	$('.product_information').fadeOut();
		$('.product_address').fadeIn();
	});
	$('#form2').submit(function(event){
		event.preventDefault();
		$('.product_name').text("Order Summary");
		$('.product_address').fadeOut();
		$('.product_summery').fadeIn();

		var size = $('#product_size').val();
		var price = $('.saleprice').text();
		var name = $('.product_name').text();
		var Qty = $('#product_qty').val();
		var color = $('#product_color').val();
		var address1 = $('#address1').val();
		var address2 = $('#address2').val();
		var City = $('#City').val();
		var State = $('#State').val();
		var Zipcode = $('#Zipcode').val();

		$('#product_name_Summery').text(name);
		$('#product_price_Summery').text(price);
		$('#product_size_Summey').text(size);
		$('#product_qty_Summey').text(Qty);
		$('#product_color_Summey').text(color);
		$('#product_addr1_Summey').text(address1);
		$('#product_addr2_Summey').text(address2);
		$('#product_City_Summey').text(City);
		$('#product_State_Summey').text(State);
		$('#product_Zip_Summey').text(Zipcode);
	});
});