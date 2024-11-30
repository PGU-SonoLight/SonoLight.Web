<script setup lang="ts">
    import { onMounted, reactive } from "vue";
    import EventBus from "@m/EventBus";
    // Sub Components
    import CompSAR from "@c/Popout/CompSAR.vue";
    
    EventBus.on("POPOUT:SIT_BACK_AND_RELAX", () => {
        data.type = "normal";
        data.load = true;
        data.comp = "sit-back-and-relax";
    });
    
    const data = reactive<{
        load: boolean,
        type: "normal" | "info" | "warning" | "error"
        comp?: string;
    }>({
        load: false,
        type: "normal"
    });
</script>

<template>
    <div class="popout-container" :class="{'load': data.load}" @click="data.load = false">
        <main class="popout-box" :class="data.type" @click="null">
            <CompSAR v-if="data.comp === 'sit-back-and-relax'" />
            <br>
            <hr style="opacity: 0.3; width: 100%">
            <br>
            <span>点击任意处关闭弹窗</span>
        </main>
    </div>
</template>

<style scoped lang="scss">
    $normal-bg: #53626a;
    $info-bg: #003317;
    $warning-bg: #573a00;
    $error-bg: #520300;
    $normal-fg: #e2e7e9;
    $info-fg: #c5ecd7;
    $warning-fg: #f9e7c3;
    $error-fg: #fbc3c1;
    $hover-color: rgba(29, 34, 37, 50%);
    
    div.popout-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(6px);
        background-color: $hover-color;
        font-size: 1.2rem;
        z-index: 998;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        
        &.load {
            opacity: 1;
            pointer-events: auto;
        }
        
        main.popout-box {
            position: absolute;
            padding: 24px 56px;
            min-width: 360px;
            max-width: 90vw;
            min-height: 240px;
            max-height: 90vh;
            border-radius: 12px;
            z-index: 999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            &.normal {
                color: $normal-fg;
                background-color: $normal-bg;
            }
            
            &.info {
                color: $info-fg;
                background-color: $info-bg;
            }
            
            &.warning {
                color: $warning-fg;
                background-color: $warning-bg;
            }
            
            &.error {
                color: $error-fg;
                background-color: $error-bg;
            }
        }
    }
</style>