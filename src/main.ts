import { createApp } from "vue";
import App from "./App.vue";
import { setupApp } from "./utils/setup";

const app = createApp(App);
setupApp(app);
app.mount("#app");
