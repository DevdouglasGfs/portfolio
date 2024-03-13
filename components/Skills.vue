<script setup lang="ts">
import type { cardProps } from './Card.vue';

const softSkills: Array<cardProps> = [{
    title: "Autodidata",
    icon: "uil:book-reader"
}, {
    title: "Resiliente",
    icon: "mdi:timer-alert-outline"
}, {
    title: "Adaptativo",
    icon: "uil:exclamation-circle"
}, {
    title: "Determinado",
    icon: "mdi:package-variant-closed"
}, {
    title: "Adepto a opiniões",
    icon: "mdi:smiley-wink-outline"
}, {
    title: "Criativo",
    icon: "mdi:palette-outline"
}, {
    title: "Proativo",
    icon: "mdi:hand-wave-outline"
}, {
    title: "Trabalho em equipe",
    icon: "fluent:people-team-16-regular"
}, {
    title: "Perseverante",
    icon: "tabler:user-code"
}]

const hardSkills: Array<cardProps> = [{
    title: "Vue",
    icon: "uil:vuejs"
}, {
    title: "Nuxt",
    icon: "mdi:nuxt"
}, {
    title: "Vite",
    icon: "file-icons:vite"
}, {
    title: "Vitest",
    icon: "simple-icons:vitest"
}, {
    title: "JavaScript",
    icon: "mdi:language-javascript"
}, {
    title: "TypeScript",
    icon: "mdi:language-typescript"
}, {
    title: "Figma",
    icon: "fa-brands:figma"
},
{
    title: "Sass",
    icon: "mdi:sass"
}, {
    title: "Git",
    icon: "mdi:git"
}, {
    title: "CSS",
    icon: "mdi:language-css3"
}, {
    title: "HTML",
    icon: "mdi:language-html5"
}, {
    title: "Tailwind",
    icon: "mdi:tailwind"
}]

const showSoftSkills = ref(true);
const showHardSkills = ref(false);

const section = ref<HTMLElement>()
const triggered = ref(false);
const sectionVisible = useElementVisibility(section);
watch(sectionVisible, (v) => {
    if (v === true) triggered.value = true;
});

const changeActiveElement = (el: 'soft' | 'hard') => {
    if (el === 'soft') showHardSkills.value = false, showSoftSkills.value = !showSoftSkills.value;
    else showSoftSkills.value = false, showHardSkills.value = !showHardSkills.value;
}
</script>
<template>
    <section ref="section" id="my-skills"
        class="portfolio-section relative flex gap-3 md:landscape:gap-6 overflow-hidden section-with-observer"
        :class="{ 'translate-y-0': sectionVisible || triggered }">
        <div class="size-max">
            <Icon class="title text-primary-500" name="mdi:briefcase-outline" />
        </div>
        <svg class="max-lg:block absolute -z-10 isolate top-0 left-0 max-w-full overflow-x-hidden" width="650" height="600"
            viewBox="0 0 650 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_31_41)">
                <rect width="100" height="100" transform="translate(100 50)" fill="#030611" fill-opacity="0.01" />
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
        <div class="flex self-stretch flex-col gap-8 w-full">
            <h2 class="title">Minhas habilidades</h2>
            <div class="self-stretch flex flex-col md:grid md:landscape:grid-cols-2 gap-3">
                <!-- soft -->
                <div class="flex flex-col gap-3 flex-auto md:landscape:col-span-1 md:landscape:min-w-1/2">
                    <div role="group" class="self-stretch">
                        <div tabindex="0" class="flex self-stretch items-center gap-3 py-1"
                            @click="changeActiveElement('soft')" @keyup.enter.exact="changeActiveElement('soft')">
                            <h3 class="text-md lg:text-lg mt-2 font-bold leading-tight capitalize">Soft skills</h3>
                            <div class="p-1 flex">
                                <Icon class="text-lg text-ntl-100" v-if="showSoftSkills"
                                    name="mdi:arrow-collapse-vertical" />
                                <Icon class="text-lg text-ntl-100" v-else name="mdi:arrow-expand-vertical" />
                                <span class="sr-only">Expandir lista de soft skills</span>
                            </div>
                        </div>
                        <ul v-if="showSoftSkills" class="flex flex-wrap gap-3 max-h-60 overflow-y-scroll snap-y snap-mandatory p-1 hidden-scrollbar overscroll-none rounded-xl ring-1 ring-ntl-700">
                            <li class="flex-auto basis-3/12 snap-center snap-always" v-for="skill in softSkills">
                                <Card tabindex="-1" class="size-full" :title="skill.title" :icon="skill.icon" />
                            </li>
                        </ul>
                    </div>
                    <NuxtImg class="h-[300px] object-scale-down lg:h-[400px] w-full"
                        src="/assets/images/characters/waiting.png" alt="" />
                </div>
                <!-- hard -->
                <div class="self-stretch w-full flex flex-col gap-3 md:landscape:col-span-1">
                    <h3 class="text-lg lg:text-2xl font-bold leading-tight capitalize">Hard skills</h3>
                    <div role="group" class="self-stretch">
                        <div tabindex="0" class="flex self-stretch items-center gap-3 py-1"
                            @click="changeActiveElement('hard')" @keyup.enter.exact="changeActiveElement('hard')">
                            <h4 class="text-md lg:text-lg mt-2 font-bold leading-tight capitalize">
                                Linguagens, frameworks e ferramentas
                            </h4>
                            <Icon class="text-lg text-ntl-100" v-if="showHardSkills" name="mdi:arrow-collapse-vertical" />
                            <Icon class="text-lg text-ntl-100" v-else name="mdi:arrow-expand-vertical" />
                            <span class="sr-only">Expandir lista de hard skills</span>
                        </div>
                        <ul v-show="showHardSkills" class="self-stretch flex flex-wrap items-center gap-3 w-full max-h-60 overflow-y-scroll snap-y snap-mandatory p-1 hidden-scrollbar overscroll-none rounded-xl ring-1 ring-ntl-700">
                            <li class="flex-auto basis-3/12 snap-always snap-center w-full" v-for="skill in hardSkills">
                                <Card tabindex="-1" :title="skill.title" :icon="skill.icon" :icon-lg="true"
                                    class="p-3 md:landscape:p-6 rounded-xl text-base lg:text-md flex flex-col items-center gap-2 min-w-16 md:landscape:min-w-28 w-full" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
