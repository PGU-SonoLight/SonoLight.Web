<script lang="ts" setup>
    import CompInConstruct from "@/components/CompInConstruct.vue";
</script>

<template>
    <main class="w-screen h-screen">
        <section id="left">
            <div class="ani-div">
                <CompInConstruct />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    main {
        background: linear-gradient(to right, #000e, #000e), url("@/assets/images/BgMachine.webp") no-repeat;
        background-size: 110vw 110vh;
        background-position-x: 40vw;
        width: 100vw;
        height: 100vh;

        section#left {
            @apply w-[120%] h-full -skew-x-12 -translate-x-1/4;
            @apply flex flex-col justify-center items-center;
            color: wheat;
            background-size: 1200px;
            background: url("@/assets/images/BgItems.webp"), linear-gradient(to right, #991b1b, #991b1b);
            background-position-x: -75vw;
            box-shadow: 2px 0 16px 16px #731515;
            transform: translateX(-25%) skewX(-12deg);

            div.ani-div {
                opacity: 0;
                transform: translateX(-1vw) skewX(9deg);
                animation: onEnter .2s ease-in-out forwards;
                animation-delay: .15s;
            }

            button.btn {
                height: 5vh;
                font-size: 1.2vw;
            }
        }
    }

    @keyframes onEnter {
        to {
            opacity: 1;
            transform: skewX(9deg);
        }
    }
</style>