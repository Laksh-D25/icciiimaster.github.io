import './style.css'
import PrimeVue from 'primevue/config';
import theme from '@primevue/themes/aura'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import ToastService from 'primevue/toastservice';

//app vue
import app from './App.vue';

//imports
import home from './views/home.vue'
import about from './views/about.vue'
import forauth from './views/forauth.vue'
import schedule from './views/schedule.vue'
import speakers from './views/speakers.vue'
import workshop from './views/workshop.vue'
import registration from './views/registration.vue'
import contactus from './views/contactus.vue'
import committee from './views/committee.vue'
import callforpaper from './views/callforpaper.vue'
import CRC from './views/crc.vue'
import e404 from './views/e404.vue'

const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/callforpaper', component: callforpaper },
    { path: '/crc', component: CRC },
    { path: '/schedule', component: schedule },
    { path: '/speakers', component: speakers },
    { path: '/workshop', component: workshop },
    { path: '/registration', component: registration },
    { path: '/contact', component: contactus },
    { path: '/committee/:id', component: committee, props: true},
    {path: '/:pathMatch(.*)*', component: e404},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const App = createApp(app)
App.use(router).mount("#app");

App.use(PrimeVue,{
    // Default theme configuration
    theme: {
        preset: theme,
        options: {
            prefix: 'p',
            darkModeSelector: 'false',
            cssLayer: false
        }
    }
 });

 App.use(ToastService);