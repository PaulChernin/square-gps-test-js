import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create a Vuetify instance with all components/directives
const vuetify = createVuetify({ components, directives })

// Tell Vue Test Utils to use it for every mount()
config.global.plugins = [vuetify]