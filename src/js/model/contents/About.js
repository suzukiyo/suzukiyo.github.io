var About = function($) {
    var SELECTORs = {
        'model' : document.querySelectorAll('[data-model="About"]')
    }
    $com = $(SELECTORs.model).find('.com');
    $com.css('height', $(window).height() + 'px');
}