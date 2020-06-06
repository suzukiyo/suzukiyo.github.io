<template>
    <section id="home-area" data-model="Home" class="text-center">

        <header class="main_header">
            <div class="header_inner">
                <div class="header_logo">
                    <a href="#home" class="logo">suzukiyo.github.io</a>
                    <span id="gnavi-menu" class="menu_icon glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                </div>
                <nav class="box_gnavi">
                    <ul class="gnavis">
                        <li class="gnavi_item"><a href="#home">Top</a></li>
                        <li class="gnavi_item"><a href="#about">About</a></li>
                        <li class="gnavi_item"><a href="#work">Work</a></li>
                        <li class="gnavi_item"><a href="#research">Learning</a></li>
                        <li class="gnavi_item"><a href="#improve">Repositories</a></li>
                        <li class="gnavi_item"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div id="title"></div>
    </section>
</template>

<script>

    export default {
        data: function() {
            return {
                msg: 'hello'
            }
        },
        mounted: function(){

            const model_selector = {
                'model' : document.querySelectorAll('[data-model="Home"]')
            }
            $(model_selector.model).css('height', $(window).height() + 'px');


            const SELECTORs = {
                "btn" : ".gnavi_item > a"
            }

            $('#gnavi-menu').click(function(e){
                if($('.main_header').hasClass('popup')) {
                    $('.main_header').removeClass('popup');
                    $('body').css('position', 'static');
                    return;
                }
                $('.main_header').addClass('popup');
                $('body').css('position', 'fixed');
            });

            $(SELECTORs.btn).on('click', function(){
                $('#gnavi-menu').click();
                scroller($(this).attr('href')+'-area');
            });

            var scroller = function(targetname) {
                $("html,body").animate({scrollTop:$(targetname).offset().top});
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import "../scss/main.scss";
</style>
