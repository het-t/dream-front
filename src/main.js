import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileMedical, faGear, faUser, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(
    faFileMedical,
    faGear,
    faUser,
    faFileArrowDown
);


const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
