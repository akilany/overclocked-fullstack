import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        main: '#f44336',
        grey: '#F8F9FA',
        blue: '#2980b9',
        dark: '#17202a',
        orange: '#e59866',
        white: '#fff',
        black: '#000'
      },
      dark: {}
    }
  },
  icons: {
    iconfont: 'fa'
  }
})
