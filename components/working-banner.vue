<template>
  <div
    class="max-md:inset-x-0 max-md:rounded-none max-lg:absolute max-lg:top-0 max-lg:right-0 flex flex-wrap items-center justify-center gap-2 p-6 md:landscape:p-4 lg:px-14 lg:py-6 bg-ntl-900 ring-1 ring-[#11FAC0]/30 backdrop-filter:blur-md text-ntl-0 uppercase font-primary max-sm:text-sm text-base lg:text-xl rounded-bl-sd lg:rounded-b-xl">
    Working at
    <NuxtLink
      class="text-[#11FAC0] min-w-fit border-b-2 border-dashed border-spacing-4 border-ntl-0/40 hover:active:border-ntl-0/80 hover:active:text-[#5EFA11] transition-colors duration-200 ease-in"
      to="https://instituto.taqtile.com.br">
      {{ organizationName }}
      <span class="text-current animate-[pulse_1500ms_infinite] font-bold">|</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  organizationName: String,
})
</script>

<style></style>
