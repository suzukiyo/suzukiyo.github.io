(function($){

		$('body').css('background-color', 'white');
		// sample css settings
		$('header').css('margin-bottom', '100px');
		$('#menu-btn').css({
			'position':'fixed',
			'cursor':'pointer',
			'font-size':'40px'
		});
		$('#title').css('font-size', '70px');
		$('#subtitle').css('font-size', '30px');
		$('#menu').css({
			'background-color':'#ccc',
			'width':'100%',
			'height':'100%',
			'display':'none',
			'bottom':0,
			'position':'fixed'
		});
		$('#up').css({
			'position':'fixed',
			'right':'5%',
			'bottom':0,
			'cursor':'pointer'
		});
		$('.btn').css({
			'width':'100%',
			'height':'200px'
		});
		$('article').css({
			'font-size':'20px',
		});
		$('img').css({
			'margin':'30px auto',
		});

	// This event is menu icon click.
	$('#menu-btn').click(function(e){
		if ($('.close-btn', this).css('display') === 'block') {
			closemenu();
		} else {
			$('#menu').fadeTo( "slow" , 0.8, function() {
				$('.open-btn', this).fadeOut('slow');
				$('.close-btn', this).fadeIn('slow');
			});
		}
		e.stopPropagation();
	});
	$('#menu').click(function(){
		e.stopPropagation();
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

	$(document).click(function() {
		$('#menu').fadeOut("slow");
	});

	// menu close function
	function closemenu(){
		$('#menu').fadeOut("slow");
		$('.open-btn', '#menu-btn').fadeIn('slow');
		$('.close-btn', '#menu-btn').fadeOut('slow');
	}

	function scroller(targetname) {
		$("html,body").animate({scrollTop:$('#'+targetname).offset().top});
	}

	$('#about-area').css({
		'background-color':'#D4D8D1'
	});
	$('#work-area').css({
		'background-color':'cornflowerblue'
	});
	$('#research-area').css({
		'background-color':'darkseagreen'
	});
	$('#improve-area').css({
		'background-color':'goldenrod'
	});
	$('#contact-area').css({
		'background-color':'hotpink'
	});
	$('.com').height('700px');

	$('h1').css({
		'margin-top':'0px',
		'margin-bottom':'0px'
	});

})(jQuery);
