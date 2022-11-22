import { createApp } from 'vue'
import App from './App.vue'

 import { vfmPlugin } from 'vue-final-modal'

// App.use(vfmPlugin)

 createApp(App).use(vfmPlugin).mount('#app')
//createApp(App).mount('#app')

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'animate.css/animate.min.css'