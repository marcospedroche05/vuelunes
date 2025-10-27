import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

var app = createApp(App);
app.config.globalProperties.$filters = {
  comprobarCollatz(numero) {
    var data = "";
    if (numero % 2 == 0) {
      data += "<span style='color:red'>" + numero + "</span>";
    } else {
      data += "<span style='color:green'>" + numero + "</span>";
    }
    return data;
  },
};

app.use(router).mount("#app");
