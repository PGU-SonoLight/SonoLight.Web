<script setup lang="ts">
    import { onMounted, ref } from "vue";
    // Components
    import RoundedIconTextButton from "@/components/RoundedIconTextButton.vue";
    // Icons
    import IconChevronDoubleRight from "virtual:icons/mdi/chevron-double-right";
    import IconLaunch from "virtual:icons/mdi/launch";
    
    const title_cn = ref<HTMLElement>();
    const title_en = ref<HTMLElement>();
    const desp = ref<HTMLElement>();
    
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
    
    onMounted(() => {
        const interval = [300, 75, 75];
        const jobInterval = 120;
        const text = ["声至发光", "Sonoluminescence", "Minecraft 赛博遗产的最终归宿"];
        typeText(title_cn.value as HTMLElement, text[0], interval[0]);
        setTimeout(() => typeText(title_en.value as HTMLElement, text[1], interval[1]), interval[0] * text[0].length + jobInterval);
        setTimeout(() => typeText(desp.value as HTMLElement, text[2], interval[2]), interval[0] * text[0].length + interval[1] * text[1].length + jobInterval * 2);
    });
</script>

<template>
    <main>
        <div class="tl-box">
            <p id="titleCn" ref="title_cn"></p>
            <p id="titleEn" ref="title_en"></p>
            <p id="desp" ref="desp"></p>
        </div>
        <div class="tb-box">
            <div class="btn1">
                <RoundedIconTextButton :icon="IconChevronDoubleRight" text="访问项目" :primary="true" />
            </div>
            <div style="display: flex; gap: 24px; margin-top: 12px">
                <div class="btn2">
                    <RoundedIconTextButton :icon="IconLaunch" text="合作服务器" />
                </div>
                <div class="btn2">
                    <RoundedIconTextButton :icon="IconLaunch" text="附属工具" />
                </div>
            </div>
        </div>
        <img class="tr-img" src="@/assets/images/tr-icon.webp" alt="">
    </main>
</template>

<style scoped lang="scss">
    main {
        position: relative;
        --color: rgb(255, 245, 226);
        
        div.tl-box {
            position: absolute;
            top: 212px;
            left: 225px;
            
            p#titleCn {
                color: var(--color);
                font-size: 96px;
                font-weight: 100;
                text-align: left;
                margin: 0;
                position: relative;
            }
            
            p#titleEn {
                color: var(--color);
                font-size: 54px;
                font-weight: 400;
                text-align: left;
                margin: 0 0 0 87px;
            }
            
            p#desp {
                color: var(--color);
                font-size: 43.5px;
                font-weight: 400;
                text-align: left;
                margin: 18px 0 0 0;
            }
        }
        
        div.tb-box {
            position: absolute;
            top: 550px;
            left: 225px;
        }
        
        img.tr-img {
            right: 300px;
            top: 120px;
            position: absolute;
            width: 357px;
            height: 430px;
            filter: brightness(115%);
            opacity: 0;
            animation: fade-left 0.5s forwards;
        }
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
