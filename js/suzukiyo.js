(function($){

	// This event is menu icon click.
	$('#menu-btn').click(function(e){
		if ($('.close-btn', this).css('display') === 'block') {
			closemenu();
		} else {
			if (!$('#overlay').length) {
				$overlay = $('<div>').attr('id', 'overlay').css({
					'background': '#666',
					'width': $(document).width(),
					'height': $(document).height(),
					'opacity': '.8',
					'top': 0,
					'left': 0,
					'position': 'absolute',
					'z-index': '1000'
				});
				$('body').append($overlay);
			}
			$('#overlay').fadeIn('slow');
			$('#menu').fadeTo( "slow" , 0.8, function() {
				$('.open-btn', this).fadeOut('slow');
				$('.close-btn', this).fadeIn('slow');
			}).css({
				'z-index': '1001'
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
		$('#overlay').fadeOut("slow");
	});

	// menu close function
	function closemenu(){
		$('#menu').fadeOut("slow");
		$('#overlay').fadeOut("slow");
		$('.open-btn', '#menu-btn').fadeIn('slow');
		$('.close-btn', '#menu-btn').fadeOut('slow');
	}

	// scroller
	function scroller(targetname) {
		$("html,body").animate({scrollTop:$(targetname).offset().top});
	}

})(jQuery);
