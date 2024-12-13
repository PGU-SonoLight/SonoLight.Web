<script setup lang="ts">
    import { onMounted, type Ref, ref } from "vue";
    import EventBus from "@m/EventBus";
    import { getCurrentSizerState } from "@m/Sizer";
    // Components
    import RoundedIconTextButton from "@c/RoundedIconTextButton.vue";
    // Icons
    import IconChevronDoubleRight from "@i/MdiChevronDoubleRight.vue";
    import IconLaunch from "@i/MdiLaunch.vue";

    const title_cn_desktop = ref<HTMLElement>();
    const title_en_desktop = ref<HTMLElement>();
    const desp_desktop = ref<HTMLElement>();
    const title_cn_tablet = ref<HTMLElement>();
    const title_en_tablet = ref<HTMLElement>();
    const desp_tablet = ref<HTMLElement>();
    const title_cn_mobile = ref<HTMLElement>();
    const title_en_mobile = ref<HTMLElement>();
    const desp_mobile = ref<HTMLElement>();

    const typeText = (element: HTMLElement, text: string, interval = 100) => {
        let index = 0;

        function insertNextLetter() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(insertNextLetter, interval);
            }
        }

        insertNextLetter();
    };

    const getElements = (): Ref<HTMLElement | undefined>[] => {
        switch (getCurrentSizerState()) {
            case "mobile":
                return [title_cn_mobile, title_en_mobile, desp_mobile];
            case "tablet":
                return [title_cn_tablet, title_en_tablet, desp_tablet];
            case "desktop":
                return [title_cn_desktop, title_en_desktop, desp_desktop];
            case "unknown":
                // May Cause Issue
                return [title_cn_mobile, title_en_mobile, desp_mobile];
        }
    };

    onMounted(() => {
        const interval = [300, 75, 75];
        const jobInterval = 120;
        const text = [
            "声致发光",
            "Sonoluminescence",
            "Minecraft 赛博遗产的最终归宿",
        ];
        typeText(getElements()[0].value as HTMLElement, text[0], interval[0]);
        setTimeout(
            () =>
                typeText(
                    getElements()[1].value as HTMLElement,
                    text[1],
                    interval[1]
                ),
            interval[0] * text[0].length + jobInterval
        );
        setTimeout(
            () =>
                typeText(
                    getElements()[2].value as HTMLElement,
                    text[2],
                    interval[2]
                ),
            interval[0] * text[0].length +
                interval[1] * text[1].length +
                jobInterval * 2
        );
    });

    const sar = () => {
        EventBus.emit("POPOUT:SIT_BACK_AND_RELAX");
    };
</script>

<template>
    <main id="desktop">
        <div class="tl-box">
            <p id="titleCn" ref="title_cn_desktop"></p>
            <p id="titleEn" ref="title_en_desktop"></p>
            <p id="desp" ref="desp_desktop"></p>
        </div>
        <div class="tb-box">
            <div class="btn1">
                <RoundedIconTextButton
                    :icon="IconChevronDoubleRight"
                    text="访问项目"
                    :primary="true"
                    @click="sar" />
            </div>
            <div style="display: flex; gap: 24px; margin-top: 12px">
                <div class="btn2">
                    <RoundedIconTextButton
                        :icon="IconLaunch"
                        text="合作服务器"
                        @click="sar" />
                </div>
                <div class="btn2">
                    <RoundedIconTextButton
                        :icon="IconLaunch"
                        text="附属工具"
                        @click="sar" />
                </div>
            </div>
        </div>
        <img class="tr-img" src="../../assets/images/logo.webp" alt="" />
    </main>
    <main id="tablet">
        <div class="tl-box">
            <img class="tr-img" src="../../assets/images/logo.webp" alt="" />
            <p id="titleCn" ref="title_cn_tablet"></p>
            <p id="titleEn" ref="title_en_tablet"></p>
            <p id="desp" ref="desp_tablet"></p>
        </div>
        <div class="tb-box">
            <div class="btn1">
                <RoundedIconTextButton
                    :icon="IconChevronDoubleRight"
                    text="访问项目"
                    :primary="true"
                    @click="sar" />
            </div>
            <div class="btn2">
                <RoundedIconTextButton
                    :icon="IconLaunch"
                    text="合作服务器"
                    @click="sar" />
            </div>
            <div class="btn2">
                <RoundedIconTextButton
                    :icon="IconLaunch"
                    text="附属工具"
                    @click="sar" />
            </div>
        </div>
    </main>
    <main id="mobile">
        <div class="tl-box">
            <img class="tr-img" src="../../assets/images/logo.webp" alt="" />
            <p id="titleCn" ref="title_cn_mobile"></p>
            <p id="titleEn" ref="title_en_mobile"></p>
            <p id="desp" ref="desp_mobile"></p>
        </div>
        <div class="tb-box">
            <div class="btn1">
                <RoundedIconTextButton
                    :icon="IconChevronDoubleRight"
                    text="访问项目"
                    :primary="true"
                    @click="sar" />
                <!-- EventBus.emit('ROUTER:TO', '/sonolight') -->
            </div>
            <div class="btn2">
                <RoundedIconTextButton
                    :icon="IconLaunch"
                    text="合作服务器"
                    @click="sar" />
            </div>
            <div class="btn2">
                <RoundedIconTextButton
                    :icon="IconLaunch"
                    text="附属工具"
                    @click="sar" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    // Main Styles

    main#mobile {
        width: 100vw;
        height: 100vh;
        position: relative;
        --color: rgb(255, 245, 226);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4vh;

        div.tl-box {
            img.tr-img {
                width: 35%;
                margin-bottom: 1vh;
            }

            p#titleCn {
                color: var(--color);
                font-size: 300%;
                font-weight: 100;
                text-align: left;
                margin: 0;
                position: relative;
            }

            p#titleEn {
                color: var(--color);
                font-size: 210%;
                font-weight: 400;
                text-align: left;
                margin: 0 0 0 87px;
            }

            p#desp {
                color: var(--color);
                font-size: 160%;
                font-weight: 400;
                text-align: left;
                margin: 1vh auto 0;
                height: 7vh;
                line-height: 7vh;
            }
        }

        div.tb-box {
            display: flex;
            flex-direction: column;
            gap: 2vh;
        }

        div.btn1 {
            animation: fade-up 0.5s forwards;
            animation-delay: 4.2s;
            opacity: 0;
        }

        div.btn2 {
            animation: fade-up 0.5s forwards;
            animation-delay: 4.4s;
            opacity: 0;
        }
    }

    main#tablet {
        width: 100vw;
        height: 100vh;
        position: relative;
        --color: rgb(255, 245, 226);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4vh;

        div.tl-box {
            img.tr-img {
                width: 40%;
                margin-bottom: 1vh;
            }

            p#titleCn {
                color: var(--color);
                font-size: 700%;
                font-weight: 100;
                text-align: left;
                margin: 0;
                position: relative;
            }

            p#titleEn {
                color: var(--color);
                font-size: 420%;
                font-weight: 400;
                text-align: left;
                margin: 0 0 0 87px;
            }

            p#desp {
                color: var(--color);
                font-size: 380%;
                font-weight: 400;
                text-align: left;
                margin: 1vh auto 0;
                height: 7vh;
                line-height: 7vh;
                width: 91vw;
            }
        }

        div.tb-box {
            display: flex;
            flex-direction: column;
            gap: 1.5vh;
            transform: scale(1.4);
        }

        div.btn1 {
            animation: fade-up 0.5s forwards;
            animation-delay: 4.2s;
            opacity: 0;
        }

        div.btn2 {
            animation: fade-up 0.5s forwards;
            animation-delay: 4.4s;
            opacity: 0;
        }
    }

    main#desktop {
        position: relative;
        --color: rgb(255, 245, 226);
        display: flex;
        flex-direction: column;

        div.tl-box {
            margin: 12vh 0 5vh 12vw;

            p#titleCn {
                color: var(--color);
                font-size: 550%;
                font-weight: 100;
                text-align: left;
                margin: 0;
                position: relative;
            }

            p#titleEn {
                color: var(--color);
                font-size: 330%;
                font-weight: 400;
                text-align: left;
                margin: 0 0 0 87px;
            }

            p#desp {
                color: var(--color);
                font-size: 290%;
                font-weight: 400;
                text-align: left;
                margin: 18px 0 0 0;
            }
        }

        div.tb-box {
            margin: 0 0 0 12vw;

            div.btn1 {
                animation: fade-up 0.5s forwards;
                animation-delay: 4.2s;
                opacity: 0;
            }

            div.btn2 {
                animation: fade-up 0.5s forwards;
                animation-delay: 4.4s;
                opacity: 0;
            }
        }

        img.tr-img {
            top: 0;
            right: 12vw;
            position: absolute;
            width: 15vw;
            filter: brightness(115%);
            opacity: 0;
            animation: fade-left 0.5s forwards;
        }
    }

    // Sizer

    @media (min-width: 320px) {
        main {
            &#desktop {
                display: none;
            }

            &#mobile {
                display: flex;
            }

            &#tablet {
                display: none;
            }
        }
    }

    @media (min-width: 768px) {
        main {
            &#desktop {
                display: none;
            }

            &#mobile {
                display: none;
            }

            &#tablet {
                display: flex;
            }
        }
    }

    @media (min-width: 1024px) {
        main {
            &#desktop {
                display: block;
            }

            &#mobile {
                display: none;
            }

            &#tablet {
                display: none;
            }
        }
    }

    @keyframes fade-up {
        from {
            transform: translateY(12px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fade-left {
        from {
            transform: translateX(12px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>
