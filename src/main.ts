import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import firebase from "./firebase";

import router from './router'

import authStore from './store/auth';


firebase.auth.onAuthStateChanged((firebaseUser) => {


    if(firebaseUser) {
        authStore.fetchUser(firebaseUser);
    }


    createApp(App)
        .use(router)
        .mount('#app')


})
