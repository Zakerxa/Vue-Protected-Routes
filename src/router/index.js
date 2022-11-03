import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Admin from '../auth/Home.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            protect: false
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {
            protect: true
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASH_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = localStorage.getItem('admin');

    if (to.name == 'Login' && auth) next({ path: '/admin' })
    else if (to.name == 'Register' && auth) next({ path: '/admin' })
    else if (to.meta.protect && !auth) next({ path: '/login' })
    else next()
})

export default router