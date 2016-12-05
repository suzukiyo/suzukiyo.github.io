var Home = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="Home"]')
    }
    $com = $(SELECTORs.model);
    $com.css('height', $(window).height() + 'px');
}