(function($){

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
	$('#menu').click(function(e){
	});

	$('.btn').click(function(){
		closemenu();
		scroller('#'+$(this).attr('id')+'-area');
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

	// scroller
	function scroller(targetname) {
		$("html,body").animate({scrollTop:$(targetname).offset().top});
	}

})(jQuery);
