import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

// Type Definition
interface RouteItem {
    path: string;
    component: any;
    meta: any;
    name: string;
}

// Auto Creator
const pages = import.meta.glob(`../App/**/meta.ts`, {
    eager: true,
    import: "default"
});
const pageComps = import.meta.glob("../App/**/page.vue");

const routes: RouteRecordRaw[] = Object.entries(pages).map(([path, meta]): RouteItem => {
    let pageJSPath = path;
    path = path.replace("../App", "").replace("/meta.ts", "");
    path = path || "/";
    const name_prefix: string[] = [];
    path.slice(1).split("Home").filter(Boolean).forEach((content: string) => {
        name_prefix.push(content.charAt(0).toUpperCase() + content.slice(1));
    });
    const name = name_prefix.join("_") ?? "Home";
    const compPath = pageJSPath.replace("meta.ts", "page.vue");
    return {
        path: name === "" ? "/" : path,
        name: name,
        component: pageComps[compPath],
        meta
    };
});

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Events
import EventBus from "@m/EventBus";

EventBus.on("ROUTER:TO", (p: string) => router.push(p));

// Export
export default router;
