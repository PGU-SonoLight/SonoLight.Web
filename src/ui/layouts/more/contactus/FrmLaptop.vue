<script setup lang="ts">
    import CompFooter from "@/ui/components/CompFooter.vue";
    import CompHeader from "@/ui/components/CompHeader.vue";
    import { ModEventBus } from "@/modules/ModEventBus";

    const $window = window;

    const handleCopy = (content: string) => {
        navigator.clipboard.writeText(content);
        ModEventBus.emit("alert:create", {
            type: "success",
            content: "Jim's Discord ID has been copied to clipboard!",
        });
    };
</script>

<template>
    <div id="Frm" class="w-screen h-screen overflow-hidden">
        <CompHeader />
        <main class="w-full h-21/24 px-32 py-12 flex flex-col gap-4">
            <h1 class="text-secondary text-6xl">联系我们</h1>
            <br />
            <h2 class="text-secondary text-4xl">用户群聊</h2>
            <section class="w-full flex gap-4">
                <!-- QQ GroupChat -->
                <button
                    class="btn btn-lg bg-info border-info w-fit text-secondary-content"
                    @click="$window.open(`https://qm.qq.com/q/9To3PwiyT6`)">
                    <svg
                        aria-label="QQ logo"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="-ml-2 mr-0.5"
                        viewBox="0 0 48 48">
                        <path
                            fill="currentColor"
                            d="M23.793 44.518c-3.659 0-7.017-1.225-9.179-3.053c-1.098.328-2.503.855-3.389 1.51c-.759.56-.664 1.13-.527 1.361c.6 1.013 10.296.647 13.095.332zm0 0c3.659 0 7.017-1.225 9.179-3.053c1.097.328 2.502.855 3.389 1.51c.758.56.663 1.13.527 1.361c-.6 1.013-10.296.647-13.095.332z" />
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M36.339 20.933c-1.641.448-6.483 1.617-12.525 1.658h-.044c-6.195-.042-11.128-1.27-12.643-1.691c-.311-.087-.481-.267-.481-.267a75 75 0 0 1-.025-1.462c0-8.065 3.807-16.17 13.171-16.171s13.172 8.105 13.172 16.171c0 .479-.024 1.407-.025 1.463c0 0-.21.192-.6.299m2.49 4.417c.517 1.35 1.028 2.755 1.403 3.96c1.786 5.748 1.207 8.126.767 8.18c-.946.114-3.68-4.327-3.68-4.327c0 4.513-4.074 11.441-13.403 11.505h-.247c-9.33-.064-13.404-6.992-13.404-11.505c0 0-2.734 4.44-3.68 4.327c-.44-.054-1.018-2.432.768-8.18c.374-1.204.885-2.61 1.403-3.96c0 0 .35-.022.526.03c1.45.418 2.994.789 4.563 1.1c-.267 1.654-.42 3.703-.276 6.122c.384 6.434 4.205 10.479 10.104 10.537h.24c5.898-.058 9.718-4.103 10.103-10.537c.144-2.42-.008-4.467-.276-6.123a55 55 0 0 0 4.64-1.122c.15-.043.448-.007.448-.007m-5.089 1.13c-3.44.68-6.995 1.07-9.926 1.035h-.044c-2.93.035-6.486-.355-9.925-1.036l.042-.256c3.427.676 6.964 1.062 9.882 1.027h.045c2.918.036 6.457-.351 9.883-1.027q.023.127.043.256M18.038 11.686c.068 1.84 1.153 3.287 2.424 3.229c1.269-.057 2.242-1.595 2.173-3.436s-1.154-3.287-2.423-3.23c-1.27.058-2.243 1.596-2.174 3.437m9.087 3.229c1.27.057 2.356-1.39 2.424-3.23c.07-1.84-.904-3.378-2.174-3.436c-1.27-.056-2.354 1.39-2.423 3.23c-.07 1.84.904 3.38 2.173 3.436m-3.31 1.009c4.232 0 7.65.837 7.99 1.59a.25.25 0 0 1 .025.106a.26.26 0 0 1-.047.145c-.286.418-4.082 2.478-7.968 2.478h-.046c-3.886 0-7.682-2.061-7.968-2.478a.26.26 0 0 1-.047-.144q0-.057.025-.108c.34-.751 3.758-1.59 7.99-1.59z"
                            clip-rule="evenodd" />
                        <path
                            fill="currentColor"
                            d="M22.022 11.714c.058.727-.34 1.373-.89 1.443c-.549.07-1.04-.461-1.1-1.188c-.057-.727.341-1.373.89-1.443c.55-.071 1.042.461 1.1 1.188m3.49.243c.112-.201.877-1.259 2.46-.874c.415.102.608.25.648.309c.06.086.077.21.016.375c-.12.329-.369.32-.506.256c-.09-.042-1.192-.777-2.208.32c-.07.075-.195.1-.313.012c-.119-.09-.167-.272-.097-.398M15.504 26.712v6.332s2.9.585 5.807.18v-5.841a53 53 0 0 1-5.807-.671" />
                        <path
                            fill="currentColor"
                            d="M36.939 20.634s-5.643 1.78-13.125 1.831h-.044c-7.47-.05-13.105-1.825-13.124-1.831l-1.89 4.716c4.726 1.425 10.584 2.343 15.014 2.29h.044c4.43.053 10.287-.865 15.014-2.29z" />
                    </svg>
                    <span class="font-normal">
                        在 QQ 上加入 声致发光 Sonoluminescence —— 赛博 MC
                        博物馆用户交流群组
                    </span>
                </button>
            </section>
            <br />
            <h2 class="text-secondary text-4xl">直接联系</h2>
            <h3 class="text-secondary text-2xl">
                核心开发者 Jim (@Jim-Lin-4549)
            </h3>
            <section class="w-full flex gap-4">
                <!-- Email -->
                <button
                    class="btn btn-lg btn-secondary"
                    @click="$window.open(`mailto:jim.lin.4549@outlook.com`)">
                    <svg
                        aria-label="Email logo"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="-ml-1 mr-1"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245zh13.5zM20.5 9.373l-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM18.75 5.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474l8.5-4.475V7.25a1.75 1.75 0 0 0-1.607-1.744z" />
                    </svg>
                    <span class="font-normal">
                        联系 jim.lin.4549@outlook.com
                    </span>
                </button>
                <!-- Discord -->
                <button
                    class="btn btn-lg bg-[#5865F2] border-[#5865F2]"
                    @click="handleCopy(`jim_lin_4549`)">
                    <svg
                        aria-label="Discord logo"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        class="-ml-1 mr-1"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12" />
                    </svg>
                    <span class="font-normal">
                        在 Discord 上联系 ! Jim Lin aka MoYuan-CN !
                    </span>
                </button>
            </section>
            <br />
            <h2 class="text-secondary text-4xl">反馈</h2>
            <section class="w-full flex gap-4">
                <button
                    class="btn btn-lg bg-black text-white border-black"
                    @click="
                        $window.open(
                            `https://github.com/PGU-SonoLight/SonoLight.Web/issues`
                        )
                    ">
                    <svg
                        aria-label="GitHub logo"
                        width="32"
                        height="32"
                        class="-ml-1 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                    </svg>
                    <span class="font-normal">在 GitHub 上反馈</span>
                </button>
            </section>
        </main>
        <CompFooter />
    </div>
</template>

<style lang="scss" scoped>
    div#Frm {
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
