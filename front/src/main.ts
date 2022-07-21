import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App);

/** Globals */
app.config.globalProperties.currentPath = [];

app.use(router);
app.mount('#app');
