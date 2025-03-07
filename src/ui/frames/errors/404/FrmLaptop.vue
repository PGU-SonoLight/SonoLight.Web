<script setup lang="ts">
    import CompFooter from "@/ui/components/CompFooter.vue";
    import CompHeader from "@/ui/components/CompHeader.vue";
</script>

<template>
    <div id="Frm404Laptop" class="w-screen h-screen overflow-hidden">
        <CompHeader />
        <main
            class="w-full h-21/24 pb-12 flex flex-col justify-center items-center">
            <h1 class="text-secondary text-6xl">这里... 什么都没有呢...</h1>
            <br />
            <p class="text-secondary text-xl">没有找到您所请求的内容</p>
            <br />
            <button
                class="btn btn-secondary scale-110"
                @click="$router.push(`/`)">
                返回主页
            </button>
        </main>
        <CompFooter />
    </div>
</template>

<style lang="scss" scoped>
    div#Frm404Laptop {
        background: linear-gradient(
                to right,
                color-mix(in oklab, var(--color-primary), transparent 30%),
                color-mix(in oklab, var(--color-primary), transparent 30%)
            ),
            url("/static/Images/BgItems.webp"), var(--color-primary);
        background-size: cover;
        background-position-y: -15%;

        main {
            opacity: 0;
            animation: ZoomFadeIn 0.5s ease-in-out forwards;
        }
    }

    @keyframes ZoomFadeIn {
        from {
            scale: 110%;
            opacity: 0;
        }
        to {
            scale: 100%;
            opacity: 100;
        }
    }
</style>
