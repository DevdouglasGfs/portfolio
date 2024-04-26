<script setup lang="ts">
export type CardProps = {
    title?: string;
    icon?: string;
    iconLg?: boolean;
}
defineProps<CardProps>();
</script>
<template>
    <button
        class="p-3 lg:p-6 capitalize rounded-sd ring-1 bg-ntl-800 ring-ntl-600 flex flex-col gap-2 transition max-lg:duration-200 duration-500 ease-in hover:active:ring-ntl-400 hover:active:bg-ntl-700 text-left group">
        <Icon v-if="icon && iconLg" :name="icon" class="text-secundary-400 text-3xl transition-colors duration-200 group-hover:text-secundary-300" />
        <Icon v-else-if="icon" :name="icon" class="text-lg text-secundary-400 transition-colors duration-200 group-hover:text-secundary-300" />
        {{ title }}
    </button>
</template>