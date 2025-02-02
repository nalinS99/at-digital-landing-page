module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#F28D35",
        analogous1: "#6A44F2",
        analogous2: "#1CBDDD",
        triadic: "#52378C",
        dark: "#4DCA79",
        text: {
          black: "#2F2F2F",
          light: "#545A75",
          subtle: "#9C9991",
        },
        accent: {
          white: "#FFF8E0",
          yarn: "#FFF8E0",
        },
        error: "#FF0335",
        success: "#5EB30B",
      },

      screens: {
        xs: "375px",
        xl2: "1200px",
        xl3: "1440px",
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
