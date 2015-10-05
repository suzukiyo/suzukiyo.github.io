(function($){

	// sample css settings
	$('body').css('background-color', 'white');
	$('header').css('margin-bottom', '100px');
	$('#menu-btn').css({
		'position':'fixed',
		'cursor':'pointer'
	});
	$('#title').css('font-size', '70px');
	$('#subtitle').css('font-size', '30px');
	$('#menu').css({
		'opacity':'.7',
		'margin':'10px 0 10px 0',
		'position':'fixed'
	});
	$('#up').css({
		'position':'fixed',
		'right':'5%',
		'bottom':0,
		'cursor':'pointer'
	});
	$('.btn').css({
		'width':'33%',
		'height':'120px',
		'font-size':'40px'
	});
	$('article').css({
		'font-size':'20px',
	});
	$('img').css({
		'margin':'30px auto',
	});

	// This event is menu icon click.
	$('#menu-btn').click(function(){
		if ($('.close-btn', this).css('display') === 'block') {
			closemenu();
		} else {
			$('#menu').fadeIn('slow');
			$('.open-btn', this).css('display', 'none');
			$('.close-btn', this).css('display', 'block');
		}
	});

	$('.btn').click(function(){
		closemenu();
		scroller($(this).attr('id')+'-area');
	});

	$("#up").hide();
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 100) {
            $('#up').fadeIn('slow');
        } else {
            $('#up').fadeOut('slow');
        }
	});
	$('#up').click(function() {
        $('body,html').animate({scrollTop:0}, 500);
        return false;
     });

	// menu close function
	function closemenu(){
		$('#menu').fadeOut('slow');
		$('.open-btn', '#menu-btn').css('display', 'block');
		$('.close-btn', '#menu-btn').css('display', 'none');
	}

	function scroller(targetname) {
		$("html,body").animate({scrollTop:$('#'+targetname).offset().top-10});
	}

	

})(jQuery);
