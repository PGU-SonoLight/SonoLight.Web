/** @type {import("tailwindcss").Config} */

import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {}
    },
    plugins: [daisyui],
    // Plugin Config
    daisyui: {
        themes: [
            {
                sonolight_theme: {
                    "primary": "#f87171",
                    "secondary": "#991b1b",
                    "accent": "#6366f1",
                    "neutral": "#ffe4e6",
                    "base-100": "#f3f4f6",
                    "info": "#0ea5e9",
                    "success": "#22c55e",
                    "warning": "#f97316",
                    "error": "#dc2626"
                }
            }
        ]
    }
};

