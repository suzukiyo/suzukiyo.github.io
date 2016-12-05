var Research = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Research"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', $(window).height() + 'px');
}