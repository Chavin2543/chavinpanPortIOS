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
        278: "278px",
        309: "309px",
        350: "350px",
        521: "521px",
        655: "655px",
      },
      height: {
        28: "28px",
        47: "47px",
        58: "58px",
        73: "73px",
        185: "185px",
        343: "343px",
        550: "550px",
        691: "691px",
      },
      colors: {
        "dock-color": "rgba(200, 200, 200, 0.7)",
        "input-color": "rgba(255, 255, 255, 0.46)",
        "terminal-body": "#1E1E1E",
        "terminal-header": "#403F3F",
        "terminal-button": "#ED6A5E",
      },
      screens: {
        mobile: "480px",
        tablet: "768px",
        laptop: "1024px",
        screen: "1200px",
      },
    },
  },
  plugins: [],
};
