import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "tw-",
  screens: {
    xs: "100px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  theme: {
    colors: {
      success: "#04AF43",
      green: "#04AF43",
      error: "#FF3333",
      white: "#ffffff",
      black: "#000000",

      n1: "#101010",
      g300: "#D4D4D8",
      pc89: "#C8951A",
      p1: "#C8951A",
      pdisabled: "#EED089",
    },
    backgroundImage: {
      "gradient-1": "linear-gradient(180deg, #6A4FF4 0%, #5638EE 100%)",
      gd2: "linear-gradient(180deg, #8774E8 0%, #43329A 100%);",
    },
    gradientColorStops: (theme) => ({
      purple1: "#6A4FF4",
      purple2: "#43329A",
    }),
    
    fontFamily: {
      Jakarta: ["Inter", "sans-serif"],
      sans: ['var(--font-inter)'],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      8: ["8px", "20px"],
      10: ["10px", "16px"],
      12: ["12px", "20px"],
      14: ["14px", "24px"],
      16: ["16px", "24px"],
      18: ["18px", "28px"],
      20: ["20px", "28px"],
      24: ["24px", "32px"],
      28: ["28px", "32px"],
      30: ["30px", "40px"],
      32: ["32px", "40px"],
      36: ["36px", "44px"],
      40: ["40px", "56px"],
      48: ["48px", "60px"],
      60: ["60px", "84px"],
      70: ["70px", "84px"],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    extend: {
      screens: {
        sm: { max: "576px" },
        md: { max: "780px" },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        autoFit_360: "repeat(auto-fill,minmax(360px,1fr))",
        autoFitt_300: "repeat(auto-fit,minmax(300px,1fr))",
        autoFitt_250: "repeat(auto-fit,minmax(300px,1fr))",
        autoFit_300: "repeat(auto-fill,minmax(300px,1fr))",
        autoFit_250: "repeat(auto-fill,minmax(250px,1fr))",
        autoFit_180: "repeat(auto-fill,minmax(180px,1fr))",
        autoFit_180_220: "repeat(auto-fill,minmax(180px,220px))",
        autoFit_120: "repeat(auto-fill,minmax(120px,1fr))",
      },
    }
  },
  plugins: [
    // require('@tailwindcss/line-clamp')
  ],
}
export default config
