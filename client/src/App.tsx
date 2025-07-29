import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
import TermsOfUse from "./screens/TermsOfUse";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./screens/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/termos" element={<TermsOfUse />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
