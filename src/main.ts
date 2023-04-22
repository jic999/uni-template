import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'
import { req } from './apis/request'

import '@/styles/index.scss'
import 'uno.css'

uni.req = req

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia,
  }
}
