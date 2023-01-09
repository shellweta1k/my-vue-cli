import { createApp } from 'vue';
import '@/theme/index.scss';
import App from './App.vue';
import router from '@/router/index';
import pinia from '@/pinia/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as svg from '@element-plus/icons-vue';

const app = createApp(App);
const icons = svg as any;
for (const i in icons) {
  app.component(`ele-${icons[i].name}`, icons[i]);
}
app.use(router).use(pinia).use(ElementPlus).mount('#app');
