import { createApp } from "vue";    
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18/index";
import ScrollReveal from "scrollreveal";
import store from './store';
import "./style.css";

const app = createApp(App);

i18n.global.locale = localStorage.getItem("lang") || "TM";
app.use(router);
app.use(i18n);
app.use(store);
app.directive('scroll-reveal', { mounted(el, binding) { ScrollReveal().reveal(el, binding.value || {}) } })
app.mount("#app");
