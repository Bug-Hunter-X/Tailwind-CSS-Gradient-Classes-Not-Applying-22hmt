# Tailwind CSS Gradient Classes Not Applying

This repository demonstrates a common but easily overlooked issue in Tailwind CSS: gradient classes failing to apply due to missing or misconfigured plugins.  The `bug.js` file shows the erroneous code, and `bugSolution.js` offers the correction.

**Problem:**

Tailwind's gradient utility classes (like `bg-gradient-to-r`, `from-blue-500`, etc.) rely on the `@tailwindcss/forms` plugin for proper functionality.  If this plugin isn't installed or isn't correctly configured in `tailwind.config.js`, these classes will not work.

**Solution:**

Ensure the plugin is installed and correctly listed in your `tailwind.config.js` file.