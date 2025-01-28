```javascript
// Correct configuration in tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure this plugin is included
  ],
}

// Corrected code in your component
<div class="bg-gradient-to-r from-blue-500 to-purple-500">Some text</div>
```