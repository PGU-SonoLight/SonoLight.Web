import { createApp } from "vue";
import App from "./App.vue";
import router from "./modules/router.ts";
import "./assets/styles/public.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

