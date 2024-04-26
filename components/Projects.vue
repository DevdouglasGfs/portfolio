<script setup lang="ts">
import type { CardProps } from './Card.vue';

export type ProjectDTO = {
    title: string;
    status: "done" | "in progress" | "paused",
    started: Date | string;
    finished?: Date | string;
    description: string;
    tecnologies: Array<CardProps>;
    github?: string;
    image?: string;
    deployUrl?: string
};

const projectsList: Ref<Array<ProjectDTO> | null> = useFetch<Array<ProjectDTO>>('/api/projects').data;


const section = ref<HTMLElement>()
const triggered = ref(false);
const sectionVisible = useElementVisibility(section);
watch(sectionVisible, (v) => {
    if (v === true) triggered.value = true;
});
</script>
<template>
    <section id="my-projects" ref="section"
        class="flex w-full gap-3 md:landscape:gap-6 section-with-observer portfolio-section relative"
        :class="{ 'translate-y-0': sectionVisible || triggered }">
        <div class="size-max">
            <Icon class="title text-primary-500" name="mdi:developer-board" />
        </div>
        <svg class="absolute -z-10 isolate top-6 left-0 max-w-full overflow-x-hidden" width="650" height="600"
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
        <div class="flex flex-col gap-6 lg:gap-8 w-full">
            <h2 class="title">Meus projetos</h2>
            <ul class="flex relative flex-col gap-16 self-stretch">
                <li v-for="project in projectsList" class="w-full">
                    <Project :status="project.status" :title="project.title" :started="project.started"
                        :description="project.description" :finished="project.finished" :github="project.github"
                        :image="project.image" :tecnologies="project.tecnologies" :deploy-url="project.deployUrl" />
                </li>
            </ul>
        </div>
    </section>
</template>