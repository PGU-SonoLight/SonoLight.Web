<script setup lang="ts">
    const props = defineProps<{
        desktop: any;
        tablet?: any;
        mobile?: any;
    }>();

    const comps = {
        mobile: props.mobile ?? props.tablet ?? props.desktop,
        tablet: props.tablet ?? props.desktop,
        desktop: props.desktop,
    };
</script>

<template>
    <main class="ResponsiveContainer">
        <section class="mobile">
            <component :is="comps.mobile" />
        </section>
        <section class="tablet">
            <component :is="comps.tablet" />
        </section>
        <section class="laptop">
            <component :is="comps.desktop" />
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .ResponsiveContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        section {
            display: none;
        }

        @media (max-width: 600px) {
            .mobile {
                display: block;
            }
        }

        @media (min-width: 601px) and (max-width: 1024px) {
            .tablet {
                display: block;
            }
        }

        @media (min-width: 1025px) {
            .laptop {
                display: block;
            }
        }
    }
</style>
