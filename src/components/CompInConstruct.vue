<script lang="ts" setup>
    import { useRouter } from "vue-router";

    const $router = useRouter();
</script>

<template>
    <section class="flex flex-col">
        <h1 class="text-6xl">此页面施工中</h1>
        <br>
        <h2 class="text-3xl">请稍后再试</h2>
        <br>
        <br>
        <button class="btn bg-[wheat] w-[7vw]" @click="$router.push(`/`)">返回主页</button>
    </section>
</template>

<style lang="scss" scoped>
    button.btn {
        height: 5vh;
        font-size: 1.1vw;
    }
</style>