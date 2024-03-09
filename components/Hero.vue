<script setup lang="ts">
type topics = {
    name: string;
    to: string;
    icon: string;
}
const topics: topics[] = [{
    name: "Quem sou eu",
    to: "#how-i-am",
    icon: "uil:question-circle"
}, {
    name: "Minhas habilidades",
    to: "#my-skills",
    icon: "mdi:briefcase-outline"
}, {
    name: "Meus projetos",
    to: "#my-projects",
    icon: "mdi:developer-board"
}, {
    name: "Meus certificados",
    to: "#my-certificates",
    icon: "mdi:certificate-outline"
}]
</script>
<template>
    <section
        class="portfolio-section relative grid grid-cols-2 lg:grid-cols-4 gap-x-5 h-svh w-full max-w-full overflow-hidden">
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
        <div class="relative col-span-2 p-6 flex flex-col gap-3 justify-between h-full">
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
            <div class="flex h-full justify-center flex-col gap-8">
                <div class="flex md:landscape:flex-row flex-col gap-16">
                    <div class="flex flex-col gap-8 flex-auto">
                        <hgroup class="self-stretch">
                            <p class="text-md mb-1 lg:text-lg capitalize font-ternary leading-tight">Front-End Developer |
                                UI
                                Designer
                            </p>
                            <div class="self-stretch relative">
                                <h1 class="title mt-1 isolate">Douglas <abbr>S.</abbr> Silva</h1>
                                <span class="absolute -z-10 hero-title top-2 text-ntl-0 text-opacity-20">Douglas S.
                                    Silva</span>
                            </div>
                        </hgroup>
                        <p class="text-base leading-tight lg:text-md">Olá, seja bem-vindo(a) ao meu portfólio.<br />
                            Separei alguns tópicos para você conhecer a mim, o meu trabalho e minhas qualificações para
                            estar atuando na área e na sua empresa</p>
                    </div>
                    <ul class="flex flex-initial flex-wrap items-center gap-6">
                        <li v-for="topic in topics" class="block">
                            <Card :title="topic.name" :icon="topic.icon" @click="navigateTo(topic.to)"
                                class="hover:active:-translate-y-3.5 hover:active:shadow-lg hover:active:shadow-secundary-600/25" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex items-center gap-2 self-stretch">
                <button @click=""
                    class="button font-bold transition-colors duration-100 ease-in-out bg-gradient-to-r from-secundary-600 to-secundary-700 hover:active:from-secundary-400 hover:active:to-secundary-500">Hire
                    Me!</button>
                <NuxtLink to="https://github.com/DevDouglasGfs"
                    class="flex gap-2 button transition-shadow duration-200 ease-in-out hover:active:ring-1 hover:active:ring-ntl-700">
                    <icon class="text-md lg:text-lg -mt-1" name="uil:github" />
                    Github
                </NuxtLink>
            </div>
        </div>
        <div class="contents lg:flex lg:flex-col lg:col-span-2 h-full lg:pb-6 lg:gap-6">
            <div
                class="max-lg:absolute max-lg:top-0 max-lg:right-0 flex items-center justify-center gap-2 p-3 lg:px-14 lg:py-6 bg-secundary-700 uppercase font-primary text-base lg:text-2xl rounded-bl-sd lg:rounded-b-xl">
                Open to work
                <div class="text-secundary-200">|</div>
            </div>
            <div
                class="hidden lg:block h-full relative overflow-hidden rounded-3xl ring-1 ring-ntl-700 *:hover:active:bg-primary-600">
                <div class="p-6 lg:p-20 rounded-full bg-ntl-800 -top-6 -left-6 absolute">
                    <icon class="size-16 lg:size-[100px] text-ntl-100" name="uil:vuejs" />
                </div>
                <div class="p-6 lg:p-20 rounded-full bg-ntl-800 top-4 right-3 absolute">
                    <icon class="size-16 lg:size-[100px] text-ntl-100" name="mdi:language-typescript" />
                </div>
                <div class="p-8 lg:p-20 rounded-full bg-ntl-800 top-1/2 right-1/2 lg:top-[213px] lg:right-[181px] absolute">
                    <icon class="size-9 lg:size-[100px] text-ntl-100" name="mdi:language-javascript" />
                </div>
                <div class="p-6 lg:p-20 rounded-full bg-ntl-800 bottom-14 right-24 absolute">
                    <icon class="size-16 lg:size-[100px] text-ntl-100" name="carbon:logo-figma" />
                </div>
                <div class="p-8 lg:p lg:p-20 rounded-full bg-ntl-800 bottom-96 left-0 absolute">
                    <icon class="size-16 lg:size-[100px] text-ntl-100" name="mdi:nuxt" />
                </div>
            </div>
        </div>
    </section>
</template>