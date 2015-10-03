(function($){

	// sample css settings
	$('body').css('background-color', '#286090');
	$('#title').css('font-size', '70px');
	$('#subtitle').css('font-size', '30px');
	$('#menu').css('opacity', '.5');
	$('#up').css({
		'position':'fixed',
		'right':'5%',
		'bottom':0
	});

	// This event is menu icon click.
	$('#menu-btn').click(function(){
		if ($('.close', this).css('display') === 'block') {
			closemenu();
		} else {
			$('#menu').css({
				'display':'block',
				'position':'absolute'
			});
			$('.open', this).css('display', 'none');
			$('.close', this).css('display', 'block');
		}
	});

	$('.btn').click(function(){
		closemenu();
		scroller($(this).attr('id')+'-area');
	});

	$('#up').click(function() {
        $('body,html').animate({scrollTop:0}, 500);
        return false;
     });

	function closemenu(){
		$('#menu').css({
				'display':'none',
				'position':'absolute'
			});
		$('.open', '#menu-btn').css('display', 'block');
		$('.close', '#menu-btn').css('display', 'none');
	}

	function scroller(targetname) {
		$("html,body").animate({scrollTop:$('#'+targetname).offset().top});
	}

	

})(jQuery);
