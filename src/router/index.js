/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// eslint-disable-next-line no-unused-vars

Vue.use(VueRouter)

const routes = [
    /*{ path: '/', redirect: '/path', },
    {
        path: '*',
        component:'name',
    },*/
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            roles: ["one"]
        },

        beforeEnter: (to, from, next) => {
            let x = localStorage.getItem('token');
            let x2 = localStorage.getItem('role');
            let y = to.meta.roles

            if (x !== null && x2 == y) {
                next()

            } else {
                next('/about')

            }

        },


    }, {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/basic',
        name: 'Basic',
        component: () =>
            import ( /* webpackChunkName: "Basic" */ '../views/Basic.vue')
    },
    {
        path: '/id/:id',
        name: 'id',
        component: () =>
            import ( /* webpackChunkName: "Basic" */ '../components/id.vue')
    }
]

const router = new VueRouter({
    routes,

    linkActiveClass: 'class'
})



export default router