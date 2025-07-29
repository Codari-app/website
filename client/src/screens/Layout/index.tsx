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
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          zIndex: 999,
          boxSizing: "border-box",
        }}
      >
        <Header />
      </div>
      <Outlet />
    </>
  );
}
