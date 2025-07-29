import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/index.ts";
import "swiper/swiper-bundle.css";
import "swiper/effect-utils";
import { BurgerMenuStyles } from "./styles/burgerStyles.ts";
import { ModalProvider } from "./context/ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <BurgerMenuStyles />
      <GlobalStyles />
      <App />
    </ModalProvider>
  </StrictMode>
);
