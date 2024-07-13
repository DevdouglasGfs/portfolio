<script setup lang="ts">
import type { CardProps } from "./common/card-info.vue"

const skills: Ref<{ soft: Array<CardProps>; hard: Array<CardProps> } | null> = useFetch<{
  soft: Array<CardProps>
  hard: Array<CardProps>
}>("/api/skills").data
const showSoftSkills = ref(true)
const showHardSkills = ref(false)

const section = ref<HTMLElement>()
const triggered = ref(false)
const sectionVisible = useElementVisibility(section)
watch(sectionVisible, (v) => {
  if (v === true) triggered.value = true
})

const changeActiveElement = (el: "soft" | "hard") => {
  if (el === "soft") (showHardSkills.value = false), (showSoftSkills.value = !showSoftSkills.value)
  else (showSoftSkills.value = false), (showHardSkills.value = !showHardSkills.value)
}
</script>
<template>
  <section
    id="my-skills"
    ref="section"
    class="portfolio-section relative flex gap-3 md:landscape:gap-6 overflow-hidden section-with-observer"
    :class="{ 'translate-y-0': sectionVisible || triggered }">
    <div class="size-max">
      <Icon
        class="title text-primary-500"
        name="mdi:briefcase-outline" />
    </div>
    <svg
      class="max-lg:block absolute -z-10 isolate top-0 left-0 max-w-full overflow-x-hidden"
      width="650"
      height="600"
      viewBox="0 0 650 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_31_41)">
        <rect
          width="100"
          height="100"
          transform="translate(100 50)"
          fill="#030611"
          fill-opacity="0.01" />
      </g>
      <defs>
        <filter
          id="filter0_d_31_41"
          x="0"
          y="-167"
          width="600"
          height="600"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="125" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.6 0 0 0 0 0.462745 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31_41" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_41"
            result="shape" />
        </filter>
      </defs>
    </svg>
    <div class="flex self-stretch flex-col gap-8 w-full">
      <h2 class="title">Minhas habilidades</h2>
      <div class="self-stretch flex flex-col md:grid md:landscape:grid-cols-2 gap-3">
        <!-- soft -->
        <div class="flex flex-col gap-3 flex-auto md:landscape:col-span-1 md:landscape:min-w-1/2">
          <div
            role="group"
            class="self-stretch">
            <div
              tabindex="0"
              class="flex self-stretch items-center justify-between border-b border-ntl-200/50 gap-3 py-1"
              @click="changeActiveElement('soft')"
              @keyup.enter.exact="changeActiveElement('soft')">
              <h3 class="text-md lg:text-lg mt-2 font-bold leading-tight capitalize">Soft skills</h3>
              <div class="p-1 flex">
                <Icon
                  v-if="showSoftSkills"
                  class="text-lg text-ntl-100"
                  name="uil:angle-up" />
                <Icon
                  v-else
                  class="text-lg text-ntl-100"
                  name="uil:angle-down" />
                <span class="sr-only">Expandir lista de soft skills</span>
              </div>
            </div>
            <Transition
              enter-active-class="transition-opacity duration-500 ease-in-out overflow-hidden"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition-opacity duration-500 ease-in-out"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ul
                v-show="showSoftSkills"
                class="flex flex-wrap gap-3 max-h-60 overflow-y-auto snap-y snap-mandatory p-1 hide-scrollbar rounded-xl ring-1 ring-ntl-700">
                <li
                  v-for="skill in skills?.soft"
                  :key="skill.title"
                  class="flex-initial min-w-max basis-3/12 snap-center snap-always">
                  <common-card-info
                    type="compact"
                    tabindex="-1"
                    class="size-full"
                    :title="skill.title"
                    :icon="skill.icon" />
                </li>
              </ul>
            </Transition>
          </div>
          <NuxtImg
            class="h-[300px] object-scale-down lg:h-[400px] w-full"
            src="/assets/images/characters/waiting.png"
            alt="" />
        </div>
        <!-- hard -->
        <div class="self-stretch w-full flex flex-col gap-3 md:landscape:col-span-1">
          <h3 class="text-md lg:text-2xl font-bold leading-tight capitalize">Hard skills</h3>
          <div
            role="group"
            class="self-stretch">
            <div
              tabindex="0"
              class="flex self-stretch items-center justify-between border-b border-ntl-200/50 gap-3 py-1"
              @click="changeActiveElement('hard')"
              @keyup.enter.exact="changeActiveElement('hard')">
              <h4 class="text-md lg:text-lg mt-2 font-semibold leading-tight">Linguagens, Frameworks e Ferramentas</h4>
              <Icon
                v-if="showHardSkills"
                class="text-lg text-ntl-100"
                name="uil:angle-up" />
              <Icon
                v-else
                class="text-lg text-ntl-100"
                name="uil:angle-down" />
              <span class="sr-only">Expandir lista de hard skills</span>
            </div>
            <Transition
              enter-active-class="transition-opacity duration-500 ease-in-out overflow-hidden"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition-opacity duration-500 ease-in-out"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ul
                v-show="showHardSkills"
                class="self-stretch flex flex-wrap items-center gap-3 w-full max-h-60 overflow-y-auto snap-y snap-mandatory p-1 hide-scrollbar rounded-xl ring-1 ring-ntl-700">
                <li
                  v-for="skill in skills?.hard"
                  :key="skill.title"
                  class="flex-initial basis-3/12 snap-center w-full">
                  <common-card-info
                    class="size-full"
                    tabindex="-1"
                    :title="skill.title"
                    :icon="skill.icon"
                    type="compact" />
                </li>
              </ul>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
