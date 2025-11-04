import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import 'vuetify/styles/main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { store } from './store/store'
import { createI18n } from 'vue-i18n'
import en from './i18n/en.json'
import ru from './i18n/ru.json'

const vuetify = createVuetify({
    components,
    directives,
})

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
    }
})

createApp(App)
    .use(router)
    .use(vuetify)
    .use(store)
    .use(i18n)
    .mount('#app')
