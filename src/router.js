import { createWebHistory, createRouter } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import MapPage from './pages/MapPage.vue'
import NotFound from './pages/404.vue'

const routes = [
    { name: 'About', path: '/', component: AboutPage },
    { name: 'Map', path: '/map/:id?', component: MapPage },
    { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound },
]

const baseURL = import.meta.env.VITE_BASE_URL

export const router = createRouter({
    history: createWebHistory(baseURL),
    routes,
})