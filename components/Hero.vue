<script setup lang="ts">
import type { cardProps } from './Card.vue';

const topics: Array<cardProps & { to: string }> = [{
    title: "Quem sou eu",
    to: "#who-i-am",
    icon: "uil:question-circle"
}, {
    title: "Minhas habilidades",
    to: "#my-skills",
    icon: "mdi:briefcase-outline"
}, {
    title: "Meus projetos",
    to: "#my-projects",
    icon: "mdi:developer-board"
}, {
    title: "Meus certificados",
    to: "#my-certificates",
    icon: "mdi:certificate-outline"
}]
</script>
<template>
    <section ref="section"
        class="portfolio-section relative grid grid-cols-2 md:landscape:grid-cols-4 gap-6 min-h-svh w-full max-w-full overflow-hidden">
        <svg class="max-lg:block absolute z-0 isolate top-0 right-0" width="350" height="430" viewBox="0 0 350 430"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_31_41)">
                <rect width="100" height="100" transform="translate(250 83)" fill="#030611" fill-opacity="0.01" />
            </g>
            <defs>
                <filter id="filter0_d_31_41" x="0" y="-167" width="600" height="600" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="125" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.462745 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_41" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_41" result="shape" />
                </filter>
            </defs>
        </svg>
        <div class="relative col-span-2 max-lg:md:landscape:col-span-4 lg:col-span-3 p-6 flex flex-col gap-3 justify-between h-full">
            <svg class="max-lg:hidden absolute z-0 isolate top-0 right-0" width="350" height="430" viewBox="0 0 350 430"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_31_41)">
                    <rect width="100" height="100" transform="translate(250 83)" fill="#030611" fill-opacity="0.01" />
                </g>
                <defs>
                    <filter id="filter0_d_31_41" x="0" y="-167" width="600" height="600" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="125" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.462745 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_41" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_41" result="shape" />
                    </filter>
                </defs>
            </svg>
            <div class="flex h-full justify-center flex-col lg:flex-wrap gap-8">
                <div class="flex flex-col justify-center gap-8">
                    <hgroup class="self-stretch">
                        <p class="text-md mb-1 lg:text-lg capitalize font-ternary leading-tight">Front-End Developer |
                            UI
                            Designer
                        </p>
                        <div class="self-stretch relative">
                            <h1 class="title mt-1 isolate">
                                Douglas S. Silva
                            </h1>
                            <span class="absolute -z-10 hero-title top-2 text-ntl-0 text-opacity-20">Douglas S.
                                Silva</span>
                        </div>
                    </hgroup>
                    <p class="text-base tracking-wide max-w-prose leading-tight lg:text-md">Olá, seja bem-vindo(a) ao
                        meu portfólio.<br /><br />
                        Separei alguns tópicos para você conhecer a mim, o meu trabalho e minhas qualificações para
                        estar atuando na área e na sua empresa</p>
                </div>
                <ul class="flex justify-start flex-wrap gap-6">
                    <li v-for="topic in topics" class="block flex-initial">
                        <Card :title="topic.title" :icon="topic.icon" @click="navigateTo(topic.to)"
                            class="md:landscape:items-center flex-wrap hover:active:-translate-y-3.5 hover:active:shadow-lg hover:active:shadow-secundary-600/25" />
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-2 self-stretch">
                <NuxtLink to="https://wa.me/+55038999392757" target="_blank"
                    class="button font-semibold transition-colors ease-in-out duration-200 lg:duration-300 tracking-wide bg-gradient-to-r from-secundary-600 to-secundary-700 hover:active:from-secundary-700 hover:active:to-secundary-800">
                    <span class="sr-only">Accessar o meu whatspp</span>
                    Contrate-Me!
                </NuxtLink>
                <NuxtLink to="https://github.com/DevDouglasGfs"
                    class="flex items-center gap-2 button transition-shadow duration-200 ease-in-out hover:active:ring-1 hover:active:ring-ntl-700">
                    <icon class="text-lg lg:text-lg -mt-2" name="uil:github" />
                    Github
                </NuxtLink>
            </div>
        </div>
        <div class="relative contents lg:flex flex-col col-span-1 h-full max-h-full pb-6 gap-6 lg:max-h-[75%]">
            <div
                class="max-lg:absolute max-lg:top-0 max-lg:right-0 flex items-center justify-center gap-2 p-6 md:landscape:p-4 lg:px-14 lg:py-6 bg-secundary-700 uppercase font-primary text-base lg:text-2xl rounded-bl-sd lg:rounded-b-xl">
                Open to work
                <div class="text-secundary-200 animate-[pulse_1500ms_infinite] font-bold">|</div>
            </div>
            <div
                class="hidden lg:flex justify-start gap-6 flex-wrap h-max max-h-full relative overflow-hidden rounded-3xl ring-1 ring-ntl-700 *:isolate *:border *:border-ntl-700 *:transition-colors *:duration-300 *:ease-in *:size-max *:flex-initial">
                <div class="p-6 md:p-5 rounded-full relative top-1 group bg-ntl-800 hover:active:bg-primary-600">
                    <icon class="size-6 text-ntl-100 group-hover:!text-ntl-0" name="uil:vuejs" />
                </div>
                <div class="p-6 rounded-full relative top-4 group bg-ntl-800 hover:active:bg-primary-600">
                    <icon class="size-12 text-ntl-100 group-hover:!text-ntl-0" name="mdi:language-typescript" />
                </div>
                <div class="p-8 rounded-full group relative right-2 bg-ntl-800 hover:active:bg-primary-600">
                    <icon class="size-9 text-ntl-100 group-hover:!text-ntl-0" name="mdi:language-javascript" />
                </div>
                <div class="p-8 rounded-full group bg-ntl-800 hover:active:bg-primary-600">
                    <icon class="size-6 text-ntl-100 group-hover:!text-ntl-0" name="carbon:logo-figma" />
                </div>
                <div class="p-8 rounded-full group bg-ntl-800 hover:active:bg-primary-600">
                    <icon class="size-6 text-ntl-100 group-hover:!text-ntl-0" name="mdi:nuxt" />
                </div>
            </div>
        </div>
    </section>
</template>