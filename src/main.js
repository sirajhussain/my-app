import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/message.css";
// Import English locale
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

// Set English locale
locale.use(lang);

Vue.prototype.$message = Message;
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
