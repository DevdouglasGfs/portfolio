<script setup lang="ts">
import type { CertificationDTO } from "../certifications-section.vue"

defineProps<CertificationDTO>()
</script>
<template>
  <article class="flex flex-col w-full md:landscape:grid md:landscape:grid-cols-2 gap-6 lg:gap-16">
    <div class="flex flex-col self-stretch gap-3 md:landscape:col-span-1">
      <div class="flex flex-wrap items-center gap-1 justify-between self-stretch">
        <h3 class="text-lg lg:text-2xl capitalize font-bold">{{ title }}</h3>
        <div class="font-ternary text-base lg:text-lg">
          <time :datetime="started.toString()">
            {{ typeof started === "string" ? started : useDateFormat(started, "DD/MM/YYYY").value.toString() }}</time
          >
          —
          <time
            v-if="finished"
            :datetime="finished.toString()">
            {{ typeof finished === "string" ? finished : useDateFormat(finished, "DD/MM/YYYY").value.toString() }}
          </time>
          <span v-else>Até o momento</span>
        </div>
      </div>
      <div class="relative isolate self-stretch rounded-xl overflow-hidden ring-1 ring-secundary-400">
        <NuxtImg
          v-if="image"
          class="!aspect-[16/9] object-cover w-full rounded-xl"
          :src="image"
          alt="" />
        <div
          v-else
          class="!aspect-[16/9] object-cover w-full rounded-xl bg-ntl-800">
          <div
            class="select-none absolute z-10 text-ntl-50 uppercase font-primary -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            Sem imagem
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col self-stretch gap-3 md:landscape:col-span-1">
      <h4 class="text-lg lg:text-2xl font-bold">Detalhes</h4>
      <div class="flex flex-col gap-8 w-full">
        <div class="flex flex-col self-stretch gap-1">
          <h5 class="text-base lg:text-md uppercase font-primary font-normal tracking-wide">Descrição</h5>
          <p class="text-base lg:text-md text-ntl-50 leading-loose max-w-prose">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
