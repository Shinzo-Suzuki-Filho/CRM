/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Gold
        secondary: "#8F7722", // Muted Gold
        background: "#0A0A0A", // Jet Black
        card: "#121212", // Slate/Charcoal
        accent: "#E0E0E0", // Silver
        text: "#FFFFFF",
        muted: "#A0A0A0",
      },
    },
  },
  plugins: [],
};
