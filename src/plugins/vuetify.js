import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#33b5e5', // 00c851, f44336, 880e4f
        secondary: '#34495e',
        accent: '#82B1FF',
        error: '#f44336',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
});
