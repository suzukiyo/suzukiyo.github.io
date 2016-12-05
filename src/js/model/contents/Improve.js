var Improve = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Improve"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', $(window).height() + 'px');
}