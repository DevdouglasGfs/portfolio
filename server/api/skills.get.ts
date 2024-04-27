import { CardProps } from "~/components/Card.vue";

const softSkills: Array<CardProps> = [{
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
const hardSkills: Array<CardProps> = [{
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

export default defineEventHandler((event) => {
    return {soft: softSkills, hard: hardSkills}
})