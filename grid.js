$('.accr-menu .item-icon').click(function(){
	$(this).find('.menu-dropdown').toggle();
});

$('.accr-menu .item-icon li .fancy-check').click(function(){
	if( $(this).val() == "all" ) {
		if( $(this).is(':checked') ) {
			$(this).closest('.accr-menu').find('.fancy-check').prop("checked",true);
			console.log($(this).is(':checked'))
		} else {
			$(this).closest('.accr-menu').find('.fancy-check').prop("checked",false);
		}
	}
});
