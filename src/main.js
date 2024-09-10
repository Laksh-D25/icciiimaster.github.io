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
import schedule from './views/schedule.vue'
import speakers from './views/speakers.vue'
import workshop from './views/workshop.vue'
import registration from './views/registration.vue'
import contactus from './views/contactus.vue'
import committee from './views/committee.vue'
import callforpaper from './views/callforpaper.vue'
import CRC from './views/crc.vue'
import e404 from './views/e404.vue'
import landing from './views/landing.vue'

const routes = [
    { path: '/icciiimaster.github.io/', component: home },
    { path: '/icciiimaster.github.io/about', component: about },
    { path: '/icciiimaster.github.io/callforpaper', component: callforpaper },
    { path: '/icciiimaster.github.io/crc', component: CRC },
    { path: '/icciiimaster.github.io/schedule', component: schedule },
    { path: '/icciiimaster.github.io/speakers', component: speakers },
    { path: '/icciiimaster.github.io/workshop', component: workshop },
    { path: '/icciiimaster.github.io/registration', component: registration },
    { path: '/icciiimaster.github.io/contact', component: contactus },
    { path: '/icciiimaster.github.io/landing', component: landing },
    { path: '/icciiimaster.github.io/committee/:id', component: committee, props: true},
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