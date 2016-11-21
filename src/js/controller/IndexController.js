var IndexController = function($){
    $(document).click(function() {
        $('#menu').fadeOut("slow");
        $('#overlay').fadeOut("slow");
    });
    header = new Header($);
    contents = new Contents($);
    menu = new Menu($);
    footer = new Footer($);
};