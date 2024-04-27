<script setup lang="ts">
import type { ProjectDTO } from "./Projects.vue";

defineProps<ProjectDTO>();

const showTechnicalDetails = ref(true);
const toggleDetails = useToggle(showTechnicalDetails);
</script>
<template>
    <article class="flex flex-col w-full md:landscape:grid md:landscape:grid-cols-2 gap-6 lg:gap-16 group">
        <div class="flex flex-col self-stretch gap-3 md:landscape:col-span-1">
            <div class="flex flex-wrap items-center gap-1 justify-between self-stretch">
                <h3 class="text-lg lg:text-2xl capitalize font-bold leading-normal">
                    {{ title }}
                </h3>
                <div class="text-base lg:text-lg font-ternary leading-normal">
                    <time :datetime="started.toString()">
                        {{
                        typeof started === "string"
                            ? started
                            : useDateFormat(started, "DD/MM/YYYY").value.toString()
                    }}</time>
                    —
                    <time v-if="finished" :datetime="finished.toString()">
                        {{
                        typeof finished === "string"
                            ? finished
                            : useDateFormat(finished, "DD/MM/YYYY").value.toString()
                    }}
                    </time>
                    <span v-else>Até o momento</span>
                </div>
            </div>
            <div class="relative isolate self-stretch rounded-xl overflow-hidden ring-1"
                :class="deployUrl ? 'ring-secundary-400' : 'ring-ntl-700'">
                <NuxtImg v-if="image"
                    class="!aspect-[16/9] object-cover w-full rounded-xl transition-[filter] duration-300 delay-300 ease-in-out brightness-50 hover:active:brightness-100 group-hover:brightness-100 group-active:brightness-100"
                    :src="image" :alt="`Imagem do projeto: ${title}`" />
                <div v-else class="!aspect-[16/9] object-cover w-full rounded-xl bg-ntl-800">
                    <div
                        class="select-none absolute z-10 text-ntl-50 uppercase font-primary -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        Sem imagem
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col self-stretch gap-3 md:landscape:col-span-1">
            <h4 class="text-lg lg:text-2xl font-bold leading-normal">Detalhes</h4>
            <div class="flex flex-col gap-3 w-full">
                <div class="flex self-stretch flex-col pb-3 gap-2">
                    <div tabindex="0"
                        class="flex self-stretch items-center justify-between border-b border-ntl-200/50 gap-3 py-1"
                        @click="toggleDetails()" @keyup.enter.exact="toggleDetails()">
                        <h5 class="font-medium text-md lg:text-lg mt-2 normal-case">
                            Tecnólogias e Frameworks
                        </h5>
                        <Icon class="text-lg text-ntl-100" v-if="showTechnicalDetails" name="uil:angle-up" />
                        <Icon class="text-lg text-ntl-100" v-else name="uil:angle-down" />
                    </div>
                    <Transition enter-active-class="transition-opacity duration-500 ease-in-out overflow-hidden"
                        enter-from-class="opacity-0" enter-to-class="opacity-100"
                        leave-active-class="transition-opacity duration-500 ease-in-out" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <ul v-show="showTechnicalDetails"
                            class="self-stretch flex items-center gap-3 w-max max-w-full max-h-60 overflow-y-scroll snap-x snap-mandatory p-1 hide-scrollbar rounded-xl">
                            <li class="flex min-w-max grow basis-3/12 snap-center" v-for="skill in tecnologies"
                                :key="skill.icon">
                                <Card tabindex="-1" :title="skill.title" :icon="skill.icon" type="compact" />
                            </li>
                        </ul>
                    </Transition>
                </div>
                <div class="flex flex-col self-stretch gap-3">
                    <p class="text-base uppercase font-primary font-normal tracking-wide">
                        Status:
                        <span class="text-primary-200 font-secundary font-normal first-letter:capitalize normal-case">
                            {{
                        status === "done"
                            ? "Finalizado"
                            : status === "in progress"
                                ? "Em progresso"
                                : "Pausado"
                    }}
                        </span>
                    </p>
                    <div class="flex flex-col gap-1">
                        <h5 class="text-base lg:text-md uppercase font-primary font-normal tracking-wide">
                            Descrição
                        </h5>
                        <div class="flex flex-col gap-2">
                            <p class="text-base lg:text-md text-ntl-50 leading-loose max-w-prose">
                                {{ description }}
                            </p>
                            <div class="flex items-center gap-3">
                                <NuxtLink v-if="github" :to="github" target="_blank"
                                    class="inline-flex grow gap-3 justify-center items-center text-base lg:text-md font-medium px-6 pt-2 pb-[2px] rounded-sd bg-gradient-to-r from-secundary-400/80 to-secundary-500 hover:outline hover:outline-secundary-400 backdrop-blur-md transition-[outline] duration-300 ease-in">
                                    <Icon class="!text-secundary-100 mb-1 text-lg" name="uil:github" />
                                    Github do projeto
                                </NuxtLink>
                                <NuxtLink :to="deployUrl" v-if="deployUrl"
                                    class="inline-flex grow gap-3 justify-evenly items-center text-base lg:text-md font-medium hover:text-ntl-0 hover:outline hover:outline-secundary-400 transition-[outline] duration-300 ease-in px-6 pt-2 pb-[2px] rounded-sd">
                                    Visitar
                                    <Icon class="text-ntl-100 mb-1 text-lg" name="radix-icons:open-in-new-window" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>