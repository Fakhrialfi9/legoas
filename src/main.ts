import { createApp } from "vue";
import App from "./base/apps/apps.vue";
import router from "./base/routes/index";
import "./base/style/components.css";
import "./base/style/form.css";
import "./base/style/framework.css";
import "./base/style/index.css";
import "./base/style/layout.css";
import "./base/style/responsive.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
