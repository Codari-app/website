import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed", // alterado de absolute para fixed
          top: 0,
          left: 0,
          width: "100vw", // alterado para 100vw
          zIndex: 999,
          boxSizing: "border-box", // garante que não ultrapasse a tela
        }}
      >
        <Header />
      </div>
      <Outlet />
    </>
  );
}
