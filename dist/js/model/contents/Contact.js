var Contact = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Contact"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', window.parent.screen.height);
}