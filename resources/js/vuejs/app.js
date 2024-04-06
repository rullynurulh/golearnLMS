import { createApp } from "vue";

import App from "./Index.vue"
import router from "./routes.js"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import CKEditor from '@ckeditor/ckeditor5-vue';


const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.use(CKEditor);
app.mount("#app")
