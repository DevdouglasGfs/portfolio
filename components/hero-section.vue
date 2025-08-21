<script setup lang="ts">
import type { CardProps } from "./common/card-info.vue"
import ContactButton from "./contact-button.vue";
import GithubButton from "./github-button.vue";

const topics: Array<CardProps & { to: string }> = [
  {
    title: "Quem sou eu",
    to: "#who-i-am",
    icon: "uil:question-circle",
  },
  {
    title: "Minhas habilidades",
    to: "#my-skills",
    icon: "mdi:briefcase-outline",
  },
  {
    title: "Meus projetos",
    to: "#my-projects",
    icon: "mdi:developer-board",
  },
  {
    title: "Meus certificados",
    to: "#my-certificates",
    icon: "mdi:certificate-outline",
  },
]

const stacks: Array<{ icon: string; name: string }> = [
  { icon: `mdi:vuejs`, name: `Vue` },
  { icon: `mdi:react`, name: `React` },
  { icon: `mdi:nuxt`, name: `Nuxt` },
  { icon: `mdi:language-javascript`, name: `JavaScript` },
  { icon: `mdi:language-typescript`, name: `TypeScript` },
  { icon: `mdi:graphql`, name: `GraphQL` },
  { icon: `simple-icons:vite`, name: `Vite` },
  { icon: `mdi:sass`, name: `Scss` },
]
</script>
<template>
  <section
    ref="section"
    class="portfolio-section relative grid grid-cols-2 md:landscape:grid-cols-4 lg:grid-cols-5 gap-6 min-h-svh w-full max-w-full overflow-hidden">
    <svg
      class="max-lg:block absolute z-0 isolate top-0 right-0"
      width="350"
      height="430"
      viewBox="0 0 350 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_31_41)">
        <rect
          width="100"
          height="100"
          transform="translate(250 83)"
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
    <div
      class="relative col-span-2 max-lg:md:landscape:col-span-4 lg:col-span-3 p-6 flex flex-col gap-3 justify-between h-full">
      <svg
        class="max-lg:hidden absolute z-0 isolate top-0 right-0"
        width="350"
        height="430"
        viewBox="0 0 350 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_31_41)">
          <rect
            width="100"
            height="100"
            transform="translate(250 83)"
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
      <div class="flex h-full justify-center flex-col lg:flex-wrap gap-8">
        <div class="flex flex-col justify-center gap-8">
          <hgroup class="self-stretch">
            <p class="text-md mb-1 max-sm:text-sm lg:text-md capitalize font-ternary leading-tight">
              Front-End Developer | UI Designer
            </p>
            <div class="self-stretch relative">
              <h1 class="title lg:text-4xl max-sm:text-lg mt-1 isolate">Douglas S. Silva</h1>
            </div>
          </hgroup>
          <p class="text-base max-sm:text-sm tracking-wide max-w-prose leading-loose">
            Olá, seja bem-vindo(a) ao meu portfólio.<br />
            Separei alguns tópicos para você conhecer a mim, o meu trabalho e minhas qualificações para estar atuando na
            área e na sua empresa
          </p>
        </div>
        <div class="relative flex">
          <div class="merge-edges-with-body -left-2 sm:hidden" />
          <div class="merge-edges-with-body right-0 [--direction:left] sm:hidden" />

          <ul class="inline-flex p-1 overflow-x-auto hide-scrollbar sm:flex-wrap max-[420px]:flex-nowrap gap-6">
            <li
              v-for="topic in topics"
              :key="topic.to"
              class="block flex-initial">
              <common-card-info
                :title="topic.title"
                :icon="topic.icon"
                class="md:landscape:items-center lg:!items-start min-w-max max-lg:flex-wrap hover:active:-translate-y-3.5 hover:active:shadow-lg hover:active:shadow-secondary-600/25"
                @click="navigateTo(topic.to)" />
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center gap-2 self-stretch">
        <ContactButton redirect-url="https://wa.me/+55038999392757" />
        <GithubButton />
      </div>
    </div>
    <div
      class="relative contents lg:flex flex-col col-span-1 max-[1080px]:lg:col-span-2 h-full max-h-full pb-6 gap-6 lg:max-h-[75%]">
      <div
        class="hidden lg:flex justify-evenly p-2 gap-6 flex-wrap h-max max-h-full xl:justify-start relative overflow-hidden rounded-3xl *:isolate *:border *:border-ntl-700 *:transition-colors *:duration-300 *:ease-in *:size-max *:flex-initial overflow-y-auto hide-scrollbar overscroll-contain">
        <div
          v-for="stack in stacks"
          :key="stack.icon"
          :title="stack.name"
          class="relative p-8 rounded-lg group bg-ntl-800 hover:active:bg-primary-600 hover:bg-gradient-to-br hover:from-ntl-600 hover:via-secondary-500 hover:via-10% hover:to-secondary-800">
          <icon
            class="size-6 text-ntl-100 group-hover:!text-ntl-0"
            :name="stack.icon" />
          <div
            class="absolute opacity-0 bottom-0 pt-1 inset-x-0 group-hover:bg-ntl-800 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100 text-ntl-50 capitalize border-t border-secondary-500 transition-[opacity,background-color] duration-100 w-full text-center">
            {{ stack.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
