import type { CertificationDTO } from "~/components/certifications-section.vue"

const certificationsList: Array<CertificationDTO> = [
  {
    title: "Técnico de informática",
    started: "18/02/2021",
    finished: "18/12/2023",
    description:
      "Ao logo deste curso tive contato com diversos tópicos e conteúdos, entre eles estão: Lógica de Programação; Design; Redes de Computadores; HTML; CSS; JavaScript; PHP; SQL; Java; Banco de Dados; Pensamento computacional; Robótica; entre outros temas.",
  },
]

export default defineEventHandler(() => {
  return certificationsList
})
