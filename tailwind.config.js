import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
import topography from "@tailwindcss/typography";

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.tsx",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [daisyui, topography],

  daisyui: {
    themes: [
      "light",
      "dark",
      {
        christmas: {
          // Base Colors (Backgrounds)
          primary: "#FF4D4D", // Festive bright red for CTAs
          secondary: "#4C9A63", // Muted green for accents (less "vibrating")
          accent: "#FFD700", // Gold for decorative highlights
          neutral: "#B71C1C", // Deep red background for the main areas
          "base-100": "#D32F2F", // Softer red for primary backgrounds
          "base-200": "#A52626", // Slightly darker red for sections/cards
          "base-300": "#7E1D1D", // Darkest red for borders/muted areas

          // Text Colors
          "base-content": "#FFFFFF", // White text for dark backgrounds

          // Feedback Colors
          info: "#64B5F6", // Soft winter blue
          success: "#4C9A63", // Muted green for success
          warning: "#FFB74D", // Warm orange for warnings
          error: "#D32F2F", // Darker red for errors
        },
      },
    ],
  },
};
