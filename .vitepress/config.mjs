import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vite Press Playground",
  description: "Just another playground for learning the Vite press.",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "BACK TO ELECTRA.ONE", link: "https://electra.one/" },
      { text: "APP & PRESETS", link: "https://app.electra.one/" },
    ],
    sidebar: [
      {
        text: "Section 1",
        collapsed: true,
        items: [{ text: "Overview", link: "/section1/index.md" }],
      },
      {
        text: "Section 2",
        collapsed: true,
        items: [{ text: "Overview", link: "/section2/index.md" }],
      },
      {
        text: "Section 3",
        collapsed: true,
        items: [{ text: "Overview", link: "/section3/index.md" }],
      },
    ],

    socialLinks: [
      {
        icon: "youtube",
        link: "https://www.youtube.com/@electraonemidicontroller",
      },
      { icon: "facebook", link: "https://www.facebook.com/electraonemidi" },
    ],

    outline: {
      level: [2, 3],
    },

    footer: {
      message: "Made with 🩶 in the Czech Republic",
    },
  },
  ignoreDeadLinks: true,
  appearance: false,
});
