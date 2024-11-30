import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import Icons from "unplugin-icons/vite";

const folder = (path: string) => {
    return fileURLToPath(new URL(path, import.meta.url));
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        Icons()
    ],
    resolve: {
        alias: {
            "@": folder("./src"),
            "@a": folder("./src/assets"),
            "@c": folder("./src/components"),
            "@i": folder("./src/icons"),
            "@m": folder("./src/modules")
        }
    }
});
