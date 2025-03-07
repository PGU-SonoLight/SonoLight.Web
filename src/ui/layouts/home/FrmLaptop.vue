<script setup lang="ts">
    import CompFooter from "@/ui/components/CompFooter.vue";
    import CompHeader from "@/ui/components/CompHeader.vue";
</script>

<template>
    <div id="Frm" class="w-screen h-screen overflow-hidden">
        <CompHeader middle />
        <main
            class="w-full h-21/24 pb-12 flex flex-col justify-center items-center">
            <h1 class="text-secondary text-6xl">
                多元化 Minecraft 赛博遗产存储库
            </h1>
            <br />
            <p class="text-secondary text-2xl">
                声致发光，一项用于收集、储存、维护、描述、分类各服务器和个人的相关存档、
            </p>
            <p class="text-secondary text-2xl">
                机器或建筑投影以及 MC 相关的衍生赛博遗产的项目
            </p>
            <br />
            <section class="flex justify-center items-center gap-8">
                <button
                    class="btn btn-secondary btn-lg"
                    @click="$router.push(`/panel/login`)">
                    开始使用
                </button>
                <a>
                    <span
                        class="text-secondary text-lg cursor-pointer"
                        @click="$router.push(`/more/about-us`)">
                        了解更多 &rarr;
                    </span>
                </a>
            </section>
        </main>
        <CompFooter> · 本页面背景图像由社区提供，版权由对应作者所有</CompFooter>
    </div>
</template>

<style lang="scss" scoped>
    div#Frm {
        background: linear-gradient(
                to right,
                color-mix(in oklab, var(--color-primary), transparent 10%),
                color-mix(in oklab, var(--color-primary), transparent 10%)
            ),
            url("/static/Images/BgMachine.webp");
        background-size: cover;
        background-position-y: 50%;

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
