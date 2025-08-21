<template>
  <NuxtLink
    class="button font-medium transition-colors ease-in-out duration-200 lg:duration-300 tracking-wide bg-gradient-to-r from-secondary-600 to-secondary-700 hover:active:from-secondary-700 hover:active:to-secondary-800"
    target="_blank"
    :to="redirectUrl">
    <span class="sr-only">Mandar mensagem no whatsapp</span>
    Contrate-Me!
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  redirectUrl: string
}>()
</script>
