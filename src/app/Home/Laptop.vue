<script lang="ts" setup>
    import { useRouter } from "vue-router";

    const $router = useRouter();
</script>

<template>
    <main class="w-screen h-screen">
        <section id="left">
            <div class="ani-div">
                <section id="texts">
                    <h1 class="text-[4.4vw] tracking-[0.07em]">声致发光</h1>
                    <h2 class="text-[2.2vw]">Minecraft <span class="tracking-[0.07em]">赛博遗产的最终归宿</span>
                    </h2>
                </section>
                <section id="buttons" class="mt-12 flex gap-6">
                    <button class="btn w-[7.5vw] bg-[wheat] text-black" @click="$router.push(`/project/select`)">
                        进入项目
                    </button>
                    <button class="btn w-[9vw] btn-secondary border-[wheat] border-[0.3vw] box-border text-[wheat]"
                            @click="$router.push(`/toolbox/select`)">
                        进入工具箱
                    </button>
                </section>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    main {
        background: linear-gradient(to right, #000c, #000c), url("@/assets/images/BgMachine.webp") no-repeat;
        background-size: 110vw 110vh;
        background-position-x: 40vw;
        width: 100vw;
        height: 100vh;

        section#left {
            @apply w-11/12 h-full -skew-x-12 -translate-x-1/4;
            @apply flex flex-col justify-center items-center;
            color: wheat;
            background: url("@/assets/images/BgItems.webp"), linear-gradient(to right, #991b1b, #991b1b);
            background-size: cover;
            background-position-x: -75%;
            box-shadow: 2px 0 16px 16px #731515;
            transform: translateX(-25%) skewX(-12deg);


            div.ani-div {
                opacity: 0;
                transform: translateX(5%) skewX(9deg);
                animation: onEnter .2s ease-in-out forwards;
                animation-delay: .1s;
            }

            button.btn {
                height: 5vh;
                font-size: 1.1vw;
            }
        }
    }

    @keyframes onEnter {
        to {
            opacity: 1;
            transform: translateX(25%) skewX(9deg);
        }
    }
</style>