import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

var app = createApp(App);
// app.config.globalProperties.$filters = {

// }


app.use(router).mount("#app");
