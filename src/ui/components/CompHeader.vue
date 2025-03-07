<script setup lang="ts"></script>

<template>
    <header class="w-full h-2/24 px-16 flex justify-between items-center">
        <section>
            <span class="text-secondary text-lg">声致发光</span>
        </section>
        <section
            class="flex justify-center items-center gap-12"
            :class="{
                'opacity-0': ['/panel/login'].includes($route.fullPath),
                'pointer-events-none': ['/panel/login'].includes(
                    $route.fullPath
                ),
            }">
            <a @click="$router.push(`/`)">
                <span class="text-secondary text-lg">主页</span>
            </a>
            <a @click="$router.push(`/panel/login`)">
                <span class="text-secondary text-lg">面板</span>
            </a>
            <a @click="$router.push(`/blog`)">
                <span class="text-secondary text-lg">博客</span>
            </a>
            <a @click="$router.push(`/contact-us`)">
                <span class="text-secondary text-lg">联系我们</span>
            </a>
        </section>
        <section
            :class="{
                'opacity-0': ['/panel/login'].includes($route.fullPath),
                'pointer-events-none': ['/panel/login'].includes(
                    $route.fullPath
                ),
            }">
            <a @click="$router.push(`/panel/login`)">
                <span class="text-secondary text-lg">
                    登录面板
                    <span aria-hidden="true">&rarr;</span>
                </span>
            </a>
        </section>
    </header>
</template>

<style lang="scss" scoped>
    a {
        cursor: pointer;
    }
</style>
