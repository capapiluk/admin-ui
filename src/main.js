import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './custom.css'
import './theme/css/app.min.css'
import './theme/css/bootstrap.min.css'
import './theme/css/icons.min.css'

import {Vue3ProgressPlugin} from '@marcoschulte/vue3-progress';
import { createPinia } from 'pinia'
//import datatable
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { notivue } from 'notivue' 
import 'notivue/notifications.css'


const pinia = createPinia()
const app = createApp(App);
app.use(Vue3ProgressPlugin)
app.component('EasyDataTable', Vue3EasyDataTable)
app.use(notivue, {
    position: 'bottom-right',
    limit: 4,
    enqueue: true
  })
app.use(router)
app.use(pinia)
app.mount('#app')
