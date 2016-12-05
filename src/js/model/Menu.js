var Menu = function($) {

    var SELECTORs = {
        "btn" : ".gnavi_item > a"
    }

    $('#gnavi-menu').click(function(e){
        if($('.main_header').hasClass('popup')) {
            $('.main_header').removeClass('popup');
            $('body').css('position', 'static');
            return;
        }
        $('.main_header').addClass('popup');
        $('body').css('position', 'fixed');
    });

    $(SELECTORs.btn).on('click', function(){
        $('#gnavi-menu').click();
        scroller($(this).attr('href')+'-area');
    });

    var scroller = function(targetname) {
        $("html,body").animate({scrollTop:$(targetname).offset().top});
    }

};