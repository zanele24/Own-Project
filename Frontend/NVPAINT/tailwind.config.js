module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
        require('daisyui')
    ],
    daisyui: {
      themes: false,
    },
  
  }