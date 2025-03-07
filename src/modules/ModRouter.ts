import { createRouter, createWebHistory } from "vue-router";

const PanelRoutes = [
    {
        path: "/panel/login",
        component: () => import("@/ui/layouts/panel/LayoutLogin.vue"),
    },
];

const BlogRoutes = [
    {
        path: "/blog",
        redirect: "/error/403",
    },
];

const ErrorRoutes = [
    {
        path: "/error/403",
        component: () => import("@/ui/layouts/errors/Layout403.vue"),
    },
    {
        path: "/error/404",
        component: () => import("@/ui/layouts/errors/Layout404.vue"),
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
            component: () => import("@/ui/layouts/LayoutHome.vue"),
        },
        ...PanelRoutes,
        ...BlogRoutes,
        {
            path: "/contact-us",
            redirect: "/error/403",
        },
        ...ErrorRoutes,
    ],
});

export default router;
