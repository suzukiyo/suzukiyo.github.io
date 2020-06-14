import Top from './Top.vue'
import About from './About.vue'
import Work from './Work.vue'
import Research from './Research.vue'
import Improve from './Improve.vue'
import Contact from './Contact.vue'

export default [
    {
        path: '/',
        name: 'top',
        component: Top
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    },
    {
        path: '/research',
        name: 'research',
        component: Research
    },
    {
        path: '/improve',
        name: 'improve',
        component: Improve
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
];