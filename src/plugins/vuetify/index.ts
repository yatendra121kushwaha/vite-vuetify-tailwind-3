// Styles
import '@/styles/_variables.scss'

// Vuetify
import { createVuetify, IconOptions } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import themes from './theme'
import defaultConfig from './defaultConfig'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { md3 } from 'vuetify/blueprints'

const icons: IconOptions = {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi
    }
}

export default createVuetify({
    blueprint: md3,
    icons,
    components,
    directives,
    defaults: defaultConfig,
    theme: themes
})
