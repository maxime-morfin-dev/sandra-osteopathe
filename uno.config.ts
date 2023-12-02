import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
} from "unocss";

export default defineConfig({
  theme: {
    breakpoints: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      xxl: "1536px",
    },
    colors: {
      "primary-dark": "#433a7e",
      "secondary-dark": "#594da8",
      "primary-light": "#fff",
      "secondary-light": "#b1abd8",
    },
  },
  shortcuts: {
    "bg-base": "bg-white dark:bg-#433a7e",
    "bg-base-lighter": "bg-#b1abd8 dark:bg-#594da8",
  },
  presets: [presetUno(), presetIcons(), presetAttributify()],
});
