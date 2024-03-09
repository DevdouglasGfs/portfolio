<script setup lang="ts">
defineProps<{
    title: string;
    icon: string;
}>();
</script>
<template>
    <button
        class="p-3 lg:p-6 rounded-sd ring-1 bg-ntl-800 ring-ntl-600 flex flex-col gap-2 transition max-lg:duration-200 duration-500 ease-in hover:active:ring-ntl-400 hover:active:bg-ntl-700 text-left">
        <Icon :name="icon" class="text-lg text-secundary-400" />
        {{ title }}
    </button>
</template>