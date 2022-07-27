import { GesturePlugin } from "@vueuse/gesture";
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).use(GesturePlugin).mount("#app");
