import typography from "@tailwindcss/typography";
import fluid, { extract, fontSize, screens } from "fluid-tailwind";
import tailwindDebugScreen from "tailwindcss-debug-screens";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
    extract,
  },
  darkMode: ["class"],
  theme: {
    extend: {
      screens,
      fontSize,
      height: {
        header: "var(--header-height)",
      },
      minHeight: {
        header: "var(--header-height)",
        main: "var(--content-height)",
      },
      spacing: {
        header: "var(--header-height)",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        neutralFace: ["NeutralFace", "serif"],
      },
      debugScreens: {
        position: ["top", "right"],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",

        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },

        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      animation: {
        "fill-up": "fill-up 0.3s linear forwards",
        "fill-stroke": "fill-stroke 6s linear forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fill-up": {
          "0%": {
            height: "0%",
          },
          "100%": {
            height: "100%",
          },
        },
        "fill-stroke": {
          "0%": {
            "stroke-dashoffset": "1000",
            "stroke-dasharray": "1000",
          },
          "100%": {
            "stroke-dashoffset": "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)", transform: "rotate(45)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        cubicBezierA: "cubic-bezier(.5,.85,.25,1.15)",
        cubicBezierB: "cubic-bezier(.5,.85,.25,1.8)",
      },
      typography: {
        DEFAULT: {
          img: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [
    typography,
    tailwindDebugScreen,
    fluid,
    require("tailwindcss-animate"),
  ],
};
