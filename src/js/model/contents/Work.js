var Work = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Work"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', window.parent.screen.height);
}