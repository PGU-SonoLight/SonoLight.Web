import { createRouter, createWebHistory } from "vue-router";
import FrmHome from "@/view/FrmHome.vue";
import ProjectFrmSelect from "@/view/Project/FrmSelect.vue";
import ToolboxFrmSelect from "@/view/Toolbox/FrmSelect.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: FrmHome,
        },
        // Projects
        {
            path: "/project/select",
            name: "ProjectSelect",
            component: ProjectFrmSelect,
        },
        // Toolbox
        {
            path: "/toolbox/select",
            name: "ToolboxSelect",
            component: ToolboxFrmSelect,
        },
    ],
});

export default router;
