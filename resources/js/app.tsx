import "../css/app.css";
import "./bootstrap";

import { ThemeProvider } from "@/Providers/ThemeProvider";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx"),
    ),
  setup({ el, App, props }) {
    if (import.meta.env.SSR) {
      hydrateRoot(el, <App {...props} />);
      return;
    }

    createRoot(el).render(
      <StrictMode>
        <ThemeProvider
          defaultTheme={
            route().current() === "seasons.show" ? "christmas" : "system"
          }
          storageKey="sb-react-daisyui-preview-theme"
        >
          <App {...props} />
        </ThemeProvider>
      </StrictMode>,
    );
  },
  progress: {
    color: "#4B5563",
  },
});
