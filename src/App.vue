<script setup lang="ts">
    import { ref } from "vue";
    import { RouterView } from "vue-router";
    import CompAlert from "@/ui/components/CompAlert.vue";
    import { ModEventBus } from "@/modules/ModEventBus";

    interface TAlertInst {
        type: "info" | "success" | "warning" | "error";
        content: any;
    }

    const alertlist = ref<TAlertInst[]>([]);
    ModEventBus.on("alert:create", (payload: TAlertInst) => {
        const list = alertlist.value;
        list.push(payload);
    });
</script>

<template>
    <RouterView />
    <div class="toast toast-end">
        <CompAlert
            v-for="item of alertlist"
            :key="item.content"
            :type="item.type"
            :content="item.content" />
    </div>
</template>
