import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";

const PanelRoutes: RouteRecordRaw[] = [
    {
        path: "/panel/login",
        component: () => import("@/app/panel/LayoutLogin.vue"),
    },
];

const BlogRoutes: RouteRecordRaw[] = [
    {
        path: "/blog",
        redirect: "/error/403",
    },
];

const MoreRoutes: RouteRecordRaw[] = [
    {
        path: "/more/contact-us",
        component: () => import("@/app/more/LayoutContactus.vue"),
    },
];

const ErrorRoutes: RouteRecordRaw[] = [
    {
        path: "/error/403",
        component: () => import("@/app/errors/Layout403.vue"),
    },
    {
        path: "/error/404",
        component: () => import("@/app/errors/Layout404.vue"),
    },
    // Auto Catch Unmatched Routes
    {
        path: "/:catchAll(.*)",
        redirect: "/error/404",
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Home
        {
            path: "/",
            component: () => import("@/app/LayoutHome.vue"),
        },
        ...PanelRoutes,
        ...BlogRoutes,
        ...MoreRoutes,
        ...ErrorRoutes,
    ],
});

export default router;
