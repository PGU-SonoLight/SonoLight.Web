<script lang="ts" setup>
    import { useRouter } from "vue-router";
    import CompRegionBtn from "@/components/CompRegionBtn.vue";

    const $router = useRouter();
</script>

<template>
    <main class="w-screen h-screen">
        <section id="left">
            <div class="ani-div">
                <section>
                    <h1>主分区</h1>
                    <CompRegionBtn
                        description="Minecraft: Java Edition"
                        name="Java 版">
                        <template #ico>
                            <img alt="" src="@/assets/icons/MdiJava.svg" />
                        </template>
                    </CompRegionBtn>
                    <CompRegionBtn
                        class="w-[97.5%]"
                        description="Minecraft: Bedrock Edition"
                        name="基岩版">
                        <template #ico>
                            <img alt="" src="@/assets/images/bedrock-128px.webp" />
                        </template>
                    </CompRegionBtn>
                </section>
                <section>
                    <h1>特殊分区</h1>
                    <CompRegionBtn
                        class="w-[90%]"
                        description="无用但有趣的红石机器"
                        name="沙雕红石">
                        <template #ico>
                            <img alt="" src="@/assets/images/redstone.png" />
                        </template>
                    </CompRegionBtn>
                </section>
                <button class="btn bg-[wheat] w-[6vw] mt-auto -skew-x-[4deg]" @click="$router.push(`/`)">返回主页</button>
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
            @apply flex flex-col pt-16;
            color: wheat;
            background: url("@/assets/images/BgItems.webp"), linear-gradient(to right, #991b1b, #991b1b);
            background-size: cover;
            background-position-x: -75%;
            box-shadow: 2px 0 16px 16px #731515;
            transform: translateX(-25%) skewX(-12deg);


            div.ani-div {
                @apply flex flex-col gap-16;
                opacity: 0;
                transform: translateX(5%) skewX(9deg);
                animation: onEnter .2s ease-in-out forwards;
                animation-delay: .1s;

                section {
                    @apply flex flex-col gap-4 w-[67%];

                    h1 {
                        @apply text-4xl -skew-x-[9deg];
                    }

                    img {
                        @apply w-16 h-16;
                    }
                }
            }
        }
    }

    @keyframes onEnter {
        to {
            opacity: 1;
            transform: translateX(calc(25% + 2rem)) skewX(12deg);
        }
    }
</style>