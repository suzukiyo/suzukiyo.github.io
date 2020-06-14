import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js';
import Index from './Index.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
    routes: routes
})

new Vue({
    router: router,
    el: "#app",
    template: "<Index/>",
    components: { Index }
})