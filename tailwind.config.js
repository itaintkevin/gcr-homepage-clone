/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'productSans': ['Product Sans']
      },
      backgroundImage: {
        // 'mesh1' : "url('./assets/mesh-276.png')",
        // 'mesh2' : "url('./assets/mesh-49.png')",
        // 'mesh3' : "url('../assets/mesh-527.png')",
        // 'mesh4' : "url('./assets/mesh-679.png')",
        // 'mesh5' : "url('./assets/mesh-759.png')",
        // 'mesh6' : "url('./assets/mesh-833.png')",
        // 'mesh7' : "url('./assets/mesh-98.png')",
      }
    },
  },
  plugins: [],
}