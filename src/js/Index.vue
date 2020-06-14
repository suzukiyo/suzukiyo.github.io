<template>
    <div>
        <header class="main_header">
            <header class="main_header">
                <div class="header_inner">
                    <div class="header_logo">
                        <router-link :to="{ name: 'top'}" class="logo">suzukiyo.github.io</router-link>
                        <span id="gnavi-menu"  class="menu_icon glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                    </div>
                </div>
            </header>
            <div class="header_inner">
                <nav class="box_gnavi">
                    <ul class="gnavis">
                        <li class="gnavi_item"><router-link :to="{ name: 'top'}">Top</router-link></li>
                        <li class="gnavi_item"><router-link :to="{ name: 'about'}">About</router-link></li>
                        <li class="gnavi_item"><router-link :to="{ name: 'work'}">Work</router-link></li>
                        <li class="gnavi_item"><router-link :to="{ name: 'research'}">Learning</router-link></li>
                        <li class="gnavi_item"><router-link :to="{ name: 'improve'}">Repositories</router-link></li>
                        <li class="gnavi_item"><router-link :to="{ name: 'contact'}">Contact</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <router-view class="view"></router-view>
    </div>
</template>

<script>

    import Vue from 'vue'
    import Top from './Top.vue'
    import About from './About.vue'
    import Work from './Work.vue'
    import Research from './Research.vue'
    import Improve from './Improve.vue'
    import Contact from './Contact.vue'
    import $ from 'jquery'

    export default {
        mounted: function() {
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
            });
        }
    }

    Vue.component('Top', Top)
    Vue.component('About', About)
    Vue.component('Work', Work)
    Vue.component('Research', Research)
    Vue.component('Improve', Improve)
    Vue.component('Contact', Contact)

</script>

<style lang="scss" scoped>
    @import "../scss/main.scss";
</style>

