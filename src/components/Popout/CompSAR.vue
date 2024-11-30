<script setup lang="ts">
</script>

<template>
    <div class="popout-comp-sar">
        <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <br>
        <br>
        <span class="sar-title">请坐和放宽</span>
        <br>
        <span class="sar-tip">这部分的内容正在抓紧制作中</span>
    </div>
</template>

<style scoped lang="scss">
    $border: hsl(229, 100%, 40%);
    $bg: url("@a/images/tube_coral_block.webp");
    
    div.popout-comp-sar {
        padding-top: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        
        .spinner {
            width: 70.4px;
            height: 70.4px;
            
            scale: 0.9;
            
            animation: spinner 1.6s infinite ease-in-out;
            transform-style: preserve-3d;
            
            div {
                background: $bg;
                background-size: 100% 100%;
                height: 100%;
                position: absolute;
                width: 100%;
                border: 3px solid $border;
            }
            
            div:nth-of-type(1) {
                transform: translateZ(-35.2px) rotateY(180deg);
            }
            
            div:nth-of-type(2) {
                transform: rotateY(-270deg) translateX(50%);
                transform-origin: top right;
            }
            
            div:nth-of-type(3) {
                transform: rotateY(270deg) translateX(-50%);
                transform-origin: center left;
            }
            
            div:nth-of-type(4) {
                transform: rotateX(90deg) translateY(-50%);
                transform-origin: top center;
            }
            
            div:nth-of-type(5) {
                transform: rotateX(-90deg) translateY(50%);
                transform-origin: bottom center;
            }
            
            div:nth-of-type(6) {
                transform: translateZ(35.2px);
            }
        }
        span.sar-title {
            font-size: 3rem;
        }
        span.sar-tip {
            font-size: 1.7rem
        }
    }
    
    @keyframes spinner {
        0% {
            transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
        }
        
        50% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
        }
        
        100% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
        }
    }
</style>