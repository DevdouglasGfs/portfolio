<script setup lang="ts">
import type { projectDTO } from './Projects.vue';

defineProps<projectDTO>();

const showTechnicalDetails = ref(false);
const toggleDetails = useToggle(showTechnicalDetails);
</script>
<template>
    <article class="flex flex-col w-full md:landscape:grid md:landscape:grid-cols-2 gap-6 lg:gap-16">
        <div class="flex flex-col self-stretch gap-3 md:landscape:col-span-1">
            <div class="flex flex-wrap items-center gap-1 justify-between self-stretch">
                <h3 class="text-lg lg:text-2xl capitalize font-bold leading-normal">{{ title }}</h3>
                <div class="text-md lg:text-lg leading-normal"><time :datetime="started">
                        {{ typeof started === 'string' ? started : useDateFormat(started,
                            'DD/MM/YYYY').value.toString() }}</time>
                    —
                    <time v-if="finished" :datetime="finished">
                        {{ typeof finished === 'string' ? finished : useDateFormat(finished, 'DD/MM/YYYY').value.toString()
                        }}
                    </time>
                    <span v-else>Até o momento</span>
                </div>
            </div>
            <div class="relative isolate self-stretch rounded-xl overflow-hidden ring-1 ring-secundary-400">
                <NuxtImg v-if="image" class="!aspect-[16/9] object-cover w-full rounded-xl" :src="image" />
                <div v-else class="!aspect-[16/9] object-cover w-full rounded-xl bg-ntl-800">
                    <div
                        class="select-none absolute z-10 text-ntl-100 uppercase font-primary -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        Sem imagem</div>
                </div>
                <NuxtLink :to="deployUrl"
                    class="px-6 max-md:landscape:py-2 py-3 rounded-tl-xl bg-secundary-400 transition-colors max-lg:duration-200 duration-300 ease-in hover:active:bg-secundary-500 absolute z-20 bottom-0 right-0 text-ntl-900"
                    :class="[{ '!bg-ntl-700 !text-ntl-0': !deployUrl && image }, { '!bg-ntl-900 !text-ntl-0': !deployUrl && !image }]">
                    <Icon class="text-2xl text-current" name="material-symbols:preview" />
                    <span class="sr-only">Ir para o deploy do projeto {{ title }}</span>
                </NuxtLink>
            </div>
        </div>
        <div class="flex flex-col self-stretch gap-3 md:landscape:col-span-1">
            <h3 class="text-lg lg:text-2xl font-bold leading-normal">Detalhes</h3>
            <div class="flex flex-col gap-8 w-full">
                <div class="flex flex-col gap-3">
                    <div tabindex="0" class="flex self-stretch items-center gap-3 py-1" @click="toggleDetails()"
                        @keyup.space.exact="toggleDetails()" @keyup.enter.exact="toggleDetails()">
                        <h4 class="text-md lg:text-lg mt-2 capitalize leading-normal">Tecnólogias e
                            frameworks</h4>
                        <Icon class="text-lg text-ntl-100" v-if="showTechnicalDetails" name="mdi:arrow-collapse-vertical" />
                        <Icon class="text-lg text-ntl-100" v-else name="mdi:arrow-expand-vertical" />
                    </div>
                    <ul class="flex flex-wrap gap-3">
                        <li v-show="showTechnicalDetails" class="flex-auto basis-3/12" v-for="skill in tecnologies">
                            <Card class="w-full p-6 rounded-xl" :title="skill.title" :icon="skill.icon" />
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col self-stretch gap-1">
                    <h3 class="text-md lg:text-lg capitalize leading-normal">Descrição</h3>
                    <div class="flex flex-col gap-2">
                        <p class="text-base lg:text-md tracking-wide leading-relaxed">{{ description }}</p>
                        <NuxtLink
                            class="inline-flex item-center justify-center text-base lg:text-md font-bold leading-tight px-6 pt-3 pb-1 rounded-sd button bg-gradient-to-b from-primary-500 to-primary-700 hover:active:from-primary-600 hover:active:to-primary-700 tracking-wide"
                            :class="{ 'bg-ntl-700 font-normal': !github }" :to="github">
                            Visitar o Github do projeto</NuxtLink>
                    </div>
                </div>
            </div>
    </div>
</article>
</template>