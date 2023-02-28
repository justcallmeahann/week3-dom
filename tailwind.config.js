/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "history": "url('/img/cold-brew.webp')",
      },
      spacing: {
        '22':'7rem',
      },
      colors:{
        'secondary':"#ffba33;",
        'tertiary':'#895537',
      }
    },
  },
  plugins: [],
};
