<template>
    <div>
        <Top/>
        <About/>
        <Work/>
        <Research/>
        <Improve/>
        <Contact/>
        <Footer/>
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
    import Footer from './Footer.vue'
    import $ from 'jquery'

    export default {
        mounted: function() {
            $(document).click(function() {
                $('#menu').fadeOut("slow");
                $('#overlay').fadeOut("slow");
            });
        }
    }

    Vue.component('Top', Top)
    Vue.component('About', About)
    Vue.component('Work', Work)
    Vue.component('Research', Research)
    Vue.component('Improve', Improve)
    Vue.component('Contact', Contact)
    Vue.component('Footer', Footer)

</script>

<style lang="scss" scoped>

</style>

