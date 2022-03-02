module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-section": "url('/src/assets/monterey.jpg')",
      }),
      width: {
        195: "195px",
        68: "68px",
        58: "58px",
        218: "218px",
        309: "309px",
      },
      height: {
        28: "28px",
        47: "47px",
        58: "58px",
        68: "68px",
        343: "343px",
      },
      colors: {
        "dock-color": "rgba(200, 200, 200, 0.7)",
        "input-color": "rgba(255, 255, 255, 0.46)",
        "terminal-body": "#1E1E1E",
        "terminal-header": "#403F3F",
        "terminal-button": "#ED6A5E",
      },
    },
  },
  plugins: [],
};
