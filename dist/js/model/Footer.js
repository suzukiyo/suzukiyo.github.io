var Footer = function($){

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

}