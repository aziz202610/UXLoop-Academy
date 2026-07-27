import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FCA61F",
          "yellow-light": "#FFF5E6",
          purple: "#8976FD",
          "purple-light": "#F0EDFF",
          blue: "#6DC8FF",
          "blue-light": "#E8F6FF",
          easter: "#C06FF2",
          soft: "#7188FF",
          turquoise: "#6DEDC3",
          "turquoise-light": "#E6FCF5",
        },
        text: {
          primary: "#33323C",
          secondary: "#5E587A",
          tertiary: "#494369",
        },
        state: {
          info: "#3F8EFD",
          success: "#27AE60",
          warning: "#E2B93B",
          error: "#EB5757",
        },
        surface: {
          DEFAULT: "#FAFBFF",
          card: "#FFFFFF",
          muted: "#F5F5FA",
          border: "#E8E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(51,50,60,0.04)",
        md: "0 4px 12px rgba(51,50,60,0.06)",
        lg: "0 8px 30px rgba(51,50,60,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;