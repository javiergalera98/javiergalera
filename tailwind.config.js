module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      black: {
        light: "#2e2e2e",
        DEFAULT: "#1e1e1e",
        dark: "#111111",
      },
      white: {
        light: "#ffffff",
        DEFAULT: "#f9f9f9",
        dark: "#f2f2f2",
      },
      gray: {
        darkest: "#484848",
        dark: "#aaaaaa",
        light: "#797979",
        lightest: "#bcbcbc",
      },
      blue: {
        dark: "#3F74EE",
        DEFAULT: "#35A6FF",
        light: "#60B9FF",
      },
      transparent: {
        DEFAULT: "transparent",
      }
    },
    extend: {
      backgroundImage: {
        'space-video': "url('/videos/space.mp4')",
        'beach-video': "url('/videos/beach.mp4')",
        'earth-video': "url('/videos/earth.mp4')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
