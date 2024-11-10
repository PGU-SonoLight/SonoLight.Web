<script setup lang="ts">
    const props = defineProps<{
        icon: any,
        text: string,
        primary?: boolean
    }>();
</script>

<template>
    <button :class="{RoundedIconTextButton: true, primary: props.primary}">
        {{ props.text }}
        <component :is="props.icon" class="RoundedIconTextButton__Icon" />
    </button>
</template>

<style scoped lang="scss">
    button.RoundedIconTextButton {
        $primary: #57D3FF;
        $secondary: #1E2C31;
        $font: #fff5e2;
        
        height: 56.25px;
        border-radius: 56.25px;
        padding: 0 22.5px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        transition: all .1s ease-in-out;
        
        color: $primary;
        background-color: $secondary;
        border: 4px solid $primary;
        
        &:hover {
            background-color: darken($secondary, 7%);
        }
        
        &:active {
            transform: translateY(2px);
        }
        
        &.primary {
            color: $font;
            background-color: $primary;
            
            &:hover {
                background-color: darken($primary, 12%);
            }
            
            &:active {
                background-color: darken($primary, 12%);
            }
        }
        
        .RoundedIconTextButton__Icon {
            width: 32px;
            height: 32px;
        }
    }
</style>