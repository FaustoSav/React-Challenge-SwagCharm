import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartProvider";
import "./index.css";
import { ThemeConfig } from "./themeConfig";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CartProvider>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </CartProvider>
);
