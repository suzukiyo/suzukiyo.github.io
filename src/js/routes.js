import Index from './Index.vue'
import About from './About.vue'

export default [
    {
        path: '/',
        name: 'index',
        component: Index.default
    },
    {
        path: '/about',
        name: 'about',
        component: About.default
    },
];