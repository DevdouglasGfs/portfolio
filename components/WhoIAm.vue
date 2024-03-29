<script setup lang="ts">
const resumePoints: Array<{ title: string; icon: string }> = [{
    title: "Desenvolvedor Front-End com 3 anos de prática",
    icon: "uil:3-plus"
}, {
    title: "Fascinado pela programação",
    icon: "uil:heart"
}, {
    title: "Experiência em projetos solo e em time",
    icon: "fluent:people-team-16-regular"
}, {
    title: "Gosto de aprender coisas novas e técnologias",
    icon: "uil:code-branch"
},{
    title: "Experiente com mais de 6 linguagens e frameworks",
    icon: "mdi:code-braces"
},{
    title: "Almejo me tornar um desenvolvedor FullStack",
    icon: "uil:cloud"
}];

const section = ref<HTMLElement>()
const triggered = ref(false);
const sectionVisible = useElementVisibility(section);
watch(sectionVisible, (v) => {
    if (v === true) triggered.value = true;
})
</script>
<template>
    <section ref="section" id="who-i-am"
        class="relative flex gap-3 md:landscape:gap-6 overflow-visible portfolio-section w-full section-with-observer"
        :class="{ '!translate-y-0': sectionVisible || triggered }">
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
        <div class="size-max">
            <icon class="title text-primary-500" name="uil:question-circle" />
        </div>
        <div class="self-stretch flex flex-col md:landscape:grid md:landscape:grid-cols-2 gap-8">
            <div class="flex flex-col gap-3 md:landscape:col-span-1">
                <h2 class="title">Quem sou eu</h2>
                <p class="text-base lg:text-lg max-w-prose mx-auto leading-relaxed">
                    Eu sou um programador Front-End com 3 anos de experiências prática realizadas com e sem um time. Já
                    trabalhei com diversas tecnologias e sou experiente em <NuxtLink to="https://vuejs.org/">Vue.js</NuxtLink>. O meu
                    foco desde que comecei é me tornar um programador Full-Stack e, posteriormente, explorar outros campos
                    da programação.
                </p>
                <NuxtImg class="self-stretch h-[300px] lg:h-[400px] object-scale-down w-full"
                    src="/assets/images/characters/pondering.png" alt="" placeholder/>
            </div>
            <div class="self-stretch flex flex-col gap-3 basis-1/2 md:landscape:col-span-1">
                <h3 class="font-bold leading-tight text-md lg:text-lg">Resumo</h3>
                <ul class="self-stretch flex flex-wrap gap-6">
                    <li v-for="point in resumePoints">
                        <Card tabindex="-1" class="flex-auto first-letter:capitalize normal-case max-w-40 md:landscape:max-w-36" :title="point.title" :icon="point.icon" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
