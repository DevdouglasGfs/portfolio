import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    fontFamily: {
      primary: "Krona One",
      secundary: "Manjari",
      ternary: "Julius Sans One"
    },
    colors: {
      "transparent": "transparent",

      "ntl-0": "#fff",
      "ntl-10": "#fafafa",
      "ntl-20": "#f5f5f5",
      "ntl-30": "#EBEBEC",
      "ntl-40": "#DEDFED",
      "ntl-50": "#C0C1C4",
      "ntl-60": "#B1B2B5",
      "ntl-70": "#A4A5A9",
      "ntl-80": "#95969B",
      "ntl-90": "#86878D",
      "ntl-100": "#77797E",
      "ntl-200": "#686A70",
      "ntl-300": "#595B62",
      "ntl-400": "#4C4E56",
      "ntl-500": "#3D3F48",
      "ntl-600": "#30333C",
      "ntl-700": "#1F212B",
      "ntl-800": "#10121D",
      "ntl-900": "#030611",


      "primary-50": "#E8F5FF",
      "primary-100": "#B6E1FD",
      "primary-200": "#93D2FD",
      "primary-300": "#62BEFC",
      "primary-400": "#43B1FB",
      "primary-500": "#129EFA",
      "primary-600": "#1290E4",
      "primary-700": "#0E70B2",
      "primary-800": "#0B578A",
      "primary-900": "#0B4269",


      "secundary-50": "#F3F1FF",
      "secundary-100": "#EAE5FF",
      "secundary-200": "#D7CFFF",
      "secundary-300": "#B9A8FF",
      "secundary-400": "#9976FF",
      "secundary-500": "#7A40FF",
      "secundary-600": "#6C19FF",
      "secundary-700": "#6714FA",
      "secundary-800": "#4F05D2",
      "secundary-900": "#4207AB",
      "secundary-950": "#260075",
    },
    fontSize: {
      "xsm": "10px",
      "sm": "13px",
      "base": "16px",
      "md": "20px",
      "lg": "25px",
      "2xl": "32px",
      "3xl": "39px",
      "4xl": "42px",
      "5xl": "61px"
    },
    extend: {
      borderRadius: {
        sd: "8px"
      },
    },
  },
  plugins: [],
} satisfies Config
