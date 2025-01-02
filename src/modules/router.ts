import { createRouter, createWebHistory } from "vue-router";
import FrmHome from "@/view/FrmHome.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: FrmHome,
        },
    ],
});

export default router;
