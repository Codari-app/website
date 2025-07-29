import CategorieItem from "../../components/CategorieItem";
import PortfolioCard from "../../components/PortfolioCard";
import { Section } from "../../components/Section";
import Subtitle from "../../components/Subtitle";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { FaMobileScreen } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { Categories } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import { portfolio } from "../../data/portfolio";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

export default function Portfolio() {
  const [activeStatus, setActiveStatus] = useState<
    "all" | "web" | "mobile" | "system"
  >("all");

  const filteredPortfolio =
    activeStatus === "all"
      ? portfolio
      : portfolio.filter((project) => project.category === activeStatus);

  return (
    <Section id="portfolio" width="100%">
      <Subtitle textalign="center">Portfolio</Subtitle>
      <Categories>
        <CategorieItem
          icon={<AiOutlineGlobal />}
          categoryName="Todos"
          onclick={() => setActiveStatus("all")}
          active={activeStatus == "all" && true}
        />
        <CategorieItem
          icon={<FiMonitor />}
          categoryName="Web"
          onclick={() => setActiveStatus("web")}
          active={activeStatus == "web" && true}
        />
        <CategorieItem
          icon={<FaMobileScreen />}
          categoryName="Mobile"
          onclick={() => setActiveStatus("mobile")}
          active={activeStatus == "mobile" && true}
        />
        <CategorieItem
          icon={<GrSystem />}
          categoryName="Sistemas"
          onclick={() => setActiveStatus("system")}
          active={activeStatus == "system" && true}
        />
      </Categories>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        speed={800}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {filteredPortfolio.map((project) => (
          <SwiperSlide key={project.id}>
            <PortfolioCard
              src={project.image}
              alt={project.alt}
              techs={project.techs}
              title={project.title}
            >
              {project.text}
            </PortfolioCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
