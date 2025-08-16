export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceRotate: {
          "0%":   { transform: "translateY(0) rotate(0deg) scale(1)" },
          "20%":  { transform: "translateY(-20%) rotate(-8deg) scale(1.05)" },
          "40%":  { transform: "translateY(0) rotate(5deg) scale(0.95)" },
          "60%":  { transform: "translateY(-15%) rotate(10deg) scale(1.1)" },
          "80%":  { transform: "translateY(0) rotate(-6deg) scale(1.02)" },
          "100%": { transform: "translateY(0) rotate(0deg) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) rotate(-3deg)" },
          "50%": { transform: "translateY(0) rotate(2deg)" },
          "75%": { transform: "translateY(-6px) rotate(3deg)" },
        },
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
      },
      animation: {
        bounceRotate: "bounceRotate 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        jump: "jump 0.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
