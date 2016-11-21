var Home = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Home"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', window.parent.screen.height);
}