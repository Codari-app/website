import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import { HeaderContainer } from "./styles";
import icon from "../../assets/icon.png";
import Button from "../Button";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);
  const navLinks = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "Sobre nós",
    },
    {
      id: "services",
      label: "Serviços",
    },
    {
      id: "technologies",
      label: "Tecnologias",
    },
    {
      id: "portfolio",
      label: "Portfolio",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "-100px 0px -100px 0px",
        }
      );

      navLinks.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        } else {
          console.warn("Seção não encontrada:", section.id);
        }
      });

      return () => observer.disconnect();
    } else {
      (window as Window).addEventListener("scroll", handleScroll);
      handleScroll();

      return () =>
        (window as Window).removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <HeaderContainer>
      <img src={icon} alt="icone" draggable="false" />

      <ul className="desktop-menu">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={activeSection === link.id ? "active" : ""}
            onClick={() => {
              scrollToSection(link.id);
              if (link.id == "home") navigate("/");
            }}
          >
            {link.label}
          </li>
        ))}
      </ul>

      <Button onclick={() => scrollToSection("contact")}>
        Entrar em contato
      </Button>

      <Menu
        right
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        className="mobile-menu"
      >
        {navLinks.map((link, i) => (
          <a
            key={i}
            onClick={() => {
              scrollToSection(link.id);
              if (link.id == "home") navigate("/");
            }}
            className={`menu-item ${activeSection === link.id ? "active" : ""}`}
            href="#"
          >
            {link.label}
          </a>
        ))}
      </Menu>
    </HeaderContainer>
  );
}
