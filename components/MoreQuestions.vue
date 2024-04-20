<script lang="ts">
export const platformsForConnection: Array<cardProps & { to: string }> = [{
    title: "instagram",
    icon: "uil:instagram",
    iconLg: true,
    to: "https://www.instagram.com/fullstack_douglas_silva?igsh=Z3JlbW9lcWhjcW9t",
}, {
    title: "Whatsapp",
    icon: "uil:whatsapp",
    iconLg: true,
    to: "https://wa.me/+55038999392757",
}, {
    title: "LinkedIn",
    icon: "uil:linkedin",
    iconLg: true,
    to: "https://www.linkedin.com/in/developer-douglas-silva"
}, {
    title: "Discord",
    icon: "mdi:discord",
    iconLg: true,
    to: "https://discord.com/invite/AcWteDjNsh"
},{
    title: "Behance",
    icon: "mdi:behance",
    iconLg: true,
    to: "https://www.behance.net/devdouglassilva"
}]
</script>
<script setup lang="ts">
import type { cardProps } from './Card.vue';


const section = ref<HTMLElement>();
const triggered = ref(false);
const runned = ref(false);
const sectionVisible = useElementVisibility(section);
watch(sectionVisible, (v) => {
    if (v === true) triggered.value = true;
});
</script>
<template>
    <section ref="section"
        class="relative w-full px-16 flex flex-col md:landscape:grid md:landscape:grid-cols-2 gap-8 portfolio-section section-with-observer"
        :class="{ 'translate-y-0': sectionVisible || triggered }">
        <svg class="absolute -z-10 isolate top-3 right-3 max-w-full overflow-x-hidden" width="650" height="600"
            viewBox="0 0 650 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_31_41)">
                <rect width="100" height="100" transform="translate(100 25)" fill="#030611" fill-opacity="0.01" />
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
        <div class="flex flex-col gap-2 md:landscape:col-span-1">
            <h2 class="title">Quer saber de mais coisas?</h2>
            <p class="text-base lg:text-md max-w-prose leading-relaxed">Você pode entrar em contato comigo por alguma das
                minhas redes
                sociais e plataformas e sentir-se livre para que eu sane suas dúvidas! Vou responder assim que possível
                <Icon name="uil:smile-wink" />
            </p>
            <ul class="flex max-md:landscape:justify-center flex-wrap gap-2">
                <li class="self-stretch flex-auto basis-1/3" v-for="plataform in platformsForConnection"
                    :key="plataform.to">
                    <NuxtLink class="size-full rounded-sd" :to="plataform.to" target="_blank">
                        <span class="sr-only">Fale comigo no {{ plataform.title }}</span>
                        <Card tabindex="-1" class="p-3 !flex-row items-center rounded-sd size-full" :title="plataform.title"
                            :icon="plataform.icon" :icon-lg="plataform.iconLg" />
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <NuxtImg
            class="self-stretch size-full object-scale-down md:landscape:col-span-1 h-[300px] lg:h-[400px] transition-transform translate-x-full duration-[1500ms] ease-in w-full"
            :class="{ '!translate-x-0': sectionVisible || triggered }" src="/assets/images/characters/runner.png" alt=""
            placeholder />
    </section>
</template>