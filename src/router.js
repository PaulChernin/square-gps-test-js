import { createWebHistory, createRouter } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import MapPage from './pages/MapPage.vue'
import NotFound from './pages/404.vue'

const routes = [
    { name: 'About', path: '/', component: AboutPage },
    { name: 'Map', path: '/map/:id?', component: MapPage },
    { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})