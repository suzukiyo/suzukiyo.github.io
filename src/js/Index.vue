<template>
    <div>
        <header id="main_header" class="main_header">
            <div class="header_inner">
                <div class="header_logo">
                    <router-link :to="{ name: 'top'}" class="logo">suzukiyo.github.io</router-link>
                    <span id="gnavi-menu" class="menu_icon glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                </div>
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

    export default {
        mounted: function() {
            const openCLoseMenu = (header) => {
                if(header.classList.contains("popup")) {
                    return header.classList.remove("popup")
                } else {
                    return header.classList.add("popup")
                }
            }

            const clickMenu = (header) => {
                header.classList.remove("popup")
            }

            const header = document.querySelector("#main_header");
            document.querySelector("#gnavi-menu")
                .onclick = () => openCLoseMenu(header);
            document.querySelectorAll(".gnavi_item > a")
                .forEach(item => item.onclick = () => clickMenu(header));
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

