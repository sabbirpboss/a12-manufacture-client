module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "img": "url('https://i.ibb.co/bNv4Qcv/1.png')",
        "img-2": "url('https://i.ibb.co/hgMbQ8T/2.png')",
        "img-3": "url('https://i.ibb.co/FgXRcKG/3.png')",
        "img-4": "url('https://i.ibb.co/3zcS4Qk/4.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        industotheme: {
          primary: "#FA4318",
          secondary: "#0A0603",
          accent: "#EFEFEF",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
