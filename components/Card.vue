<script setup lang="ts">
export type cardProps = {
    title: string;
    icon?: string;
    iconLg?: boolean;
}
defineProps<cardProps>();
</script>
<template>
    <button
        class="p-3 lg:p-6 capitalize rounded-sd ring-1 bg-ntl-800 ring-ntl-600 flex flex-col gap-2 transition max-lg:duration-200 duration-500 ease-in hover:active:ring-ntl-400 hover:active:bg-ntl-700 text-left">
        <Icon v-if="icon && iconLg" :name="icon" class="text-secundary-400" :class="['text-3xl']" />
        <Icon v-else-if="icon" :name="icon" class="text-lg text-secundary-400" />
        {{ title }}
    </button>
</template>