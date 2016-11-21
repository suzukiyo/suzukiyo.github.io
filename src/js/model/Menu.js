var Menu = function($) {

    var SELECTORs = {
        "btn" : ".btn"
    }

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
                    'display': 'none',
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

    $(SELECTORs.btn).on('click', function(){
        close();
        scroller('#'+$(this).attr('id')+'-area');
    });

    var scroller = function(targetname) {
        $("html,body").animate({scrollTop:$(targetname).offset().top});
    }

    var close = function(){
        $('#menu').fadeOut("slow");
        $('#overlay').fadeOut("slow");
        $('.open-btn', '#menu-btn').fadeIn('slow');
        $('.close-btn', '#menu-btn').fadeOut('slow');
    }

};