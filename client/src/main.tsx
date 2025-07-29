import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './styles/index.ts'
import 'swiper/swiper-bundle.css';
import 'swiper/effect-utils';
import { BurgerMenuStyles } from './styles/burgerStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BurgerMenuStyles />
    <GlobalStyles />
    <App />
  </StrictMode>,
)
