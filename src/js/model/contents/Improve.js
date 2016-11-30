var Improve = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Improve"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', window.parent.screen.height);
    $(window).resize(function(){
        $com.css('height', window.parent.screen.height);
    });
}