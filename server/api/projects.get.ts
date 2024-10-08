import type { ProjectDTO } from "~/components/projects-section.vue"

const projectsList: Array<ProjectDTO> = [
  {
    title: "Taqtile",
    started: "27/05/2024",
    finished: "03/07/2024",
    description: "A project created with the purpose of make the project proposed in the Technical Test stage.",
    github: "https://github.com/DevdouglasGfs/taqtile",
    status: "finalizado",
    tecnologies: [
      {
        title: "React",
        icon: "uil:react",
      },
      {
        title: "TypeScript",
        icon: "mdi:language-typescript",
      },
      {
        title: "GraphQL",
        icon: "mdi:graphql",
      },
      {
        title: "Apollo Client",
        icon: "simple-icons:apollographql",
      },
      {
        title: "Styled Components",
        icon: "simple-icons:styledcomponents",
      },
    ],
  },
  {
    title: "Este portfólio",
    started: "08/03/2024",
    finished: "10/03/2024",
    github: "https://github.com/devdouglasgfs/portfolio",
    image: "/assets/images/projects/portfolio.png",
    deployUrl: "https://devdouglasportfolio.netlify.app",
    description:
      "Meu portfólio pessoal foi desenvolvido com Nuxt, Vue e Tailwind e tem sua prototipagem no Figma, tem o propósito de exibir meus projetos, habilidades e informações sobre mim.",
    status: "concluido",
    tecnologies: [
      {
        title: "Vue",
        icon: "uil:vuejs",
      },
      {
        title: "Nuxtjs",
        icon: "mdi:nuxt",
      },
      {
        title: "TypeScript",
        icon: "mdi:language-typescript",
      },
      {
        title: "Tailwind",
        icon: "mdi:tailwind",
      },
      {
        title: "Figma",
        icon: "carbon:logo-figma",
      },
    ],
  },
  {
    title: "Vulcan Novels",
    started: "03/03/2024",
    finished: "04/04/2024",
    description:
      "Um site dedicado a leitura de novels(Novelas traduzido para o Português) autorais para a Vulcan Scanlator. Tem sua prototipagem feita no Figma e está sendo desenvolvido usando principalmente Vite, Vue e Tailwind no front-end.",
    status: "Suporte técnico",
    image: "/assets/images/projects/vulcan-novels.png",
    tecnologies: [
      {
        title: "Vue",
        icon: "uil:vuejs",
      },
      {
        title: "Nuxtjs",
        icon: "mdi:nuxt",
      },
      {
        title: "TypeScript",
        icon: "mdi:language-typescript",
      },
      {
        title: "Vitest",
        icon: "simple-icons:vitest",
      },
      {
        title: "Tailwind",
        icon: "mdi:tailwind",
      },
      {
        title: "Figma",
        icon: "carbon:logo-figma",
      },
    ],
  },
  {
    title: "Taxas atuais",
    started: "27/03/2024",
    finished: "28/03/2024",
    github: "https://github.com/devdouglasgfs/taxas-atuais",
    deployUrl: "https://taxasatuais.devdouglassilva.xyz",
    image: "/assets/images/projects/taxas-atuais.png",
    description: "Uma aplicação para fazer consultas sobre o valor atual das taxas usando a API do BrasilAPI.",
    status: "finalizado",
    tecnologies: [
      {
        title: "jQuery",
        icon: "mdi:jquery",
      },
      {
        title: "Figma",
        icon: "carbon:logo-figma",
      },
      {
        title: "HTML",
        icon: "mdi:language-html5",
      },
      {
        title: "Scss",
        icon: "mdi:sass",
      },
    ],
  },
]

export default defineEventHandler(() => {
  return projectsList
})
