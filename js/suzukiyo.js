(function($){

	// sample css settings
	$('body').css('background-color', '#286090');
	$('#title').css('font-size', '70px');
	$('#subtitle').css('font-size', '30px');

	// This event is menu icon click.
	$('#menu-btn').click(function(){
		if ($('.close', this).css('display') === 'block') {
			$('#menu').css({
				'display':'none',
				'position':'absolute'
			});
			$('.open', this).css('display', 'block');
			$('.close', this).css('display', 'none');
		} else {
			$('#menu').css({
				'display':'block',
				'position':'absolute'
			});
			$('.open', this).css('display', 'none');
			$('.close', this).css('display', 'block');
		}
	});


})(jQuery);