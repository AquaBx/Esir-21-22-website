import { createApp, ref } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.globalPath = ref([]);

app.use(router);
app.mount('#app');
