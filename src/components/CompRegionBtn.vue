<script lang="ts" setup>
    const props = defineProps<{
        readonly name: string;
        readonly description?: string
    }>();
</script>

<template>
    <button class="CompRegionBtn">
        <slot name="ico"></slot>
        <object>
            <h1>{{ name }}</h1>
            <span>{{ description }}</span>
        </object>
    </button>
</template>

<style lang="scss" scoped>
    button.CompRegionBtn {
        @apply btn bg-[wheat] py-4 -skew-x-[4deg];
        height: fit-content;

        object {
            @apply ml-12 mr-auto flex items-baseline gap-4;

            h1 {
                @apply text-4xl;
            }
        }
    }
</style>