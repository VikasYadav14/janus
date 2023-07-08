/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
      },
      animation: {
        typing: "typing 2s steps(14), blink .5s infinite"
      },
      keyframes: {
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "[#3100fb]" },
        },
      }
    },
    listStyleType: {
      circle: 'circle',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}