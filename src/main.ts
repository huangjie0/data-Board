import { createApp } from 'vue'
import "@/assets/style/main.less";
import App from './App.vue'
import router from "./router";
import '@/assets/style/iconfont/iconfont.css';
import './assets/style/font/font.css';
// 状态机
import {createPinia} from "pinia";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App)

app.directive('focus', (el:any, binding:any) => {
    console.log(binding.value);
    el.focus()
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.mount('#app');
