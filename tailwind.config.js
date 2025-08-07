/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "homeland-green": "#00d4aa",
        "homeland-dark": "#2c3e50",
        "homeland-gray": "#6c757d",
        "homeland-light-gray": "#f8f9fa",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      minWidth: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      minHeight: {
        "screen-75": "75vh",
        "screen-50": "50vh",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-pretty": {
          "text-wrap": "pretty",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          "-ms-overflow-style": "auto",
          "scrollbar-width": "auto",
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
        ".aspect-auto": {
          "aspect-ratio": "auto",
        },
        ".aspect-square": {
          "aspect-ratio": "1 / 1",
        },
        ".aspect-video": {
          "aspect-ratio": "16 / 9",
        },
        ".aspect-photo": {
          "aspect-ratio": "4 / 3",
        },
        ".aspect-portrait": {
          "aspect-ratio": "3 / 4",
        },
        ".aspect-landscape": {
          "aspect-ratio": "4 / 3",
        },
        ".aspect-ultrawide": {
          "aspect-ratio": "21 / 9",
        },
        ".container-responsive": {
          width: "100%",
          maxWidth: "min(90vw, 1200px)",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
        },
        ".container-fluid": {
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
        },
        ".grid-responsive": {
          display: "grid",
          gap: "clamp(1rem, 3vw, 2rem)",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        },
        ".flex-responsive": {
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(0.5rem, 2vw, 1rem)",
        },
        ".flex-responsive-col": {
          display: "flex",
          flexDirection: "column",
          gap: "clamp(0.5rem, 2vw, 1rem)",
        },
        ".text-fluid": {
          fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
        },
        ".text-fluid-lg": {
          fontSize: "clamp(1.5rem, 4vw, 3rem)",
        },
        ".text-fluid-xl": {
          fontSize: "clamp(2rem, 6vw, 4rem)",
        },
        ".padding-fluid": {
          padding: "clamp(1rem, 4vw, 3rem)",
        },
        ".margin-fluid": {
          margin: "clamp(1rem, 4vw, 3rem)",
        },
        ".gap-fluid": {
          gap: "clamp(0.5rem, 2vw, 2rem)",
        },
        ".width-fluid": {
          width: "clamp(250px, 90vw, 1200px)",
        },
        ".height-fluid": {
          height: "clamp(200px, 50vh, 600px)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
