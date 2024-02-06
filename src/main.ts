import router from "@/router";
import App from "@/App.vue";
import { createApp } from "vue";
import "@styles/style.css";
import "@styles/tailwind.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
