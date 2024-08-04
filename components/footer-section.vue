<script setup lang="ts">
import { platformsForConnection } from "./questions-section.vue"

const platforms = platformsForConnection.concat([
  {
    title: "Github",
    to: "https://github.com/devdouglasgfs/",
    icon: "uil:github",
  },
])
</script>
<template>
  <footer
    class="flex flex-col gap-8 w-full max-w-full md:landscape:grid lg:grid md:landscape:grid-cols-2 lg:grid-cols-2 bg-secundary-500 px-16 py-6">
    <div class="flex flex-col gap-6 md:landscape:col-span-1">
      <hgroup class="flex flex-col gap-2">
        <h6 class="title lg:text-4xl max-sm:text-lg leading-relaxed">Douglas S. Silva - Portfólio</h6>
        <p class="text-sm lg:text-base capitalize leading-relaxed">
          Copyright © 2024<br>Todos os direitos autorais reservados
        </p>
      </hgroup>
      <div class="flex flex-col">
        <h6 class="text-base lg:text-md font-bold capitalize">Minhas plataformas</h6>
        <nav class="self-stretch">
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="plataform in platforms"
              :key="plataform.title"
              class="self-stretch">
              <NuxtLink
                class="rounded-xl size-max"
                :to="plataform.to">
                <common-card-info
                  tabindex="-1"
                  :icon="plataform.icon"
                  class="p-6 rounded-xl !flex-row *:!text-ntl-0" />
                <span class="sr-only">Fale comigo pelo {{ plataform.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <NuxtImg
      class="self-stretch object-scale-down h-[300px] lg:h-[400px] md:landscape:col-span-1 w-full"
      src="/assets/images/characters/roboto.png"
      placeholder
      alt="" />
  </footer>
</template>
