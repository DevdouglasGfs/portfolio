<script setup lang="ts">
import type { ProjectDTO } from "../projects-section.vue"

defineProps<ProjectDTO>()

const showTechnicalDetails = ref(true)
const toggleDetails = useToggle(showTechnicalDetails)
</script>
<template>
  <article class="flex flex-col w-full max-w-full md:landscape:grid lg:grid md:landscape:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-16 group">
    <div class="flex flex-col self-stretch gap-3 md:landscape:col-span-1">
      <div class="flex flex-wrap items-center gap-1 justify-between self-stretch">
        <h3 class="text-md lg:text-2xl capitalize font-bold leading-normal">
          {{ title }}
        </h3>
        <div class="text-base font-ternary leading-normal">
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
      <div
        class="relative isolate self-stretch rounded-xl overflow-hidden ring-1"
        :class="deployUrl ? 'ring-secundary-400' : 'ring-ntl-700'">
        <NuxtImg
          v-if="image"
          class="!aspect-[16/9] object-cover w-full rounded-xl transition-[filter] duration-300 delay-300 ease-in-out brightness-50 hover:active:brightness-100 group-hover:brightness-100 group-active:brightness-100"
          :src="image"
          :alt="`Imagem do projeto: ${title}`" />
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
    <div class="flex flex-col self-stretch gap-3 w-full">
      <h4 class="text-md lg:text-2xl font-bold leading-normal">Detalhes</h4>
      <div class="flex flex-col gap-3 w-full">
        <div class="flex self-stretch flex-col pb-3 gap-2 w-full">
          <div
            tabindex="0"
            class="flex self-stretch items-center justify-between border-b border-ntl-200/50 gap-3 py-1 cursor-pointer"
            @click="toggleDetails()"
            @keyup.enter.exact="toggleDetails()">
            <h5 class="font-medium text-md max-sm:text-base mt-2 normal-case">Tecnólogias e Frameworks</h5>
            <Icon
              v-if="showTechnicalDetails"
              class="text-lg text-ntl-100"
              name="uil:angle-up" />
            <Icon
              v-else
              class="text-lg text-ntl-100"
              name="uil:angle-down" />
          </div>
          <Transition
            enter-active-class="transition-opacity duration-500 ease-in-out overflow-hidden"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-500 ease-in-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <ul
              v-show="showTechnicalDetails"
              class="w-full flex flex-wrap max-w-full items-center gap-3 max-h-60 snap-mandatory p-1 hide-scrollbar rounded-xl">
              <li
                v-for="skill in tecnologies"
                :key="skill.icon"
                class="flex w-full flex-auto basis-3/12 snap-center">
                <common-card-info
                  class="w-full"
                  tabindex="-1"
                  :title="skill.title"
                  :icon="skill.icon"
                  type="compact" />
              </li>
            </ul>
          </Transition>
        </div>
        <div class="flex flex-col self-stretch gap-3">
          <p class="max-sm:text-sm text-base uppercase font-primary font-normal tracking-wide">
            Status:
            <span class="text-primary-200 font-secundary font-normal capitalize">
              {{ status.trim() }}
            </span>
          </p>
          <div class="flex flex-col gap-1">
            <h5 class="max-sm:text-sm text-base lg:text-md uppercase font-primary font-normal tracking-wide">
              Descrição
            </h5>
            <div class="flex flex-col gap-2">
              <p class="text-base text-ntl-50 leading-loose max-w-pros first-letter:capitalize">
                {{ description }}
              </p>
              <div class="flex flex-wrap items-center gap-3">
                <NuxtLink
                  v-if="github"
                  :to="github"
                  target="_blank"
                  class="inline-flex grow gap-3 justify-between items-center text-base font-medium px-6 pt-2 pb-[2px] rounded-sd bg-gradient-to-r from-secundary-400/80 to-secundary-500 hover:outline hover:outline-secundary-400 backdrop-blur-md transition-[outline] duration-300 ease-in">
                  Github do projeto
                  <Icon
                    class="!text-secundary-100 mb-1 text-lg"
                    name="uil:github" />
                </NuxtLink>
                <NuxtLink
                  v-if="deployUrl"
                  :to="deployUrl"
                  class="inline-flex grow gap-3 justify-between items-center text-base font-medium hover:text-ntl-0 hover:outline hover:outline-secundary-400 transition-[outline] duration-300 ease-in px-6 pt-2 pb-[2px] rounded-sd">
                  Visitar
                  <Icon
                    class="text-ntl-100 mb-1 text-lg"
                    name="radix-icons:open-in-new-window" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
