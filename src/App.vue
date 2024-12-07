<script setup lang="ts">
    import { RouterView } from "vue-router";
    import Popout from "@c/Popout/Popout.vue";
</script>

<template>
    <div class="container">
        <RouterView />
    </div>
    <Popout />
</template>

<style scoped lang="scss">
    div.container {
        position: relative;
        background: linear-gradient(to right, rgba(0, 0, 0, 35%), rgba(0, 0, 0, 35%));
        background-size: cover;
        overflow: hidden;
        min-height: 100vh;
    }
    
    div.container::before {
        content: "";
        position: absolute;
        top: -10%;
        left: -10%;
        right: -10%;
        bottom: -10%;
        background-image: url("@a/images/bg/azure-sea.webp");
        background-size: cover;
        filter: blur(4px);
        z-index: -1;
    }
</style>
