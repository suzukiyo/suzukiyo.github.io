var Contact = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Contact"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', '120px');
    $(window).resize(function(){
        $com.css('height', window.parent.screen.height);
    });
}