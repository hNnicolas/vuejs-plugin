import { createApp } from 'vue'
import App from './App.vue'
import { examplePlugin } from './shared/plugins/examplePlugin'

const app = createApp(App)

app.use(examplePlugin)

app.mount('#app')
