import { Section } from "../../components/Section";
import Subtitle from "../../components/Subtitle";
import TechnologiesCard from "../../components/TechnologiesCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { technologies } from "../../data/technologies";

export default function Technologies() {
  return (
    <Section width="100%" id="technologies">
      <Subtitle textalign="center">Nossas Tecnologias</Subtitle>
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
        {technologies.map((technology, index) => {
          return (
            <SwiperSlide key={index}>
              <TechnologiesCard
                icon={<technology.icon />}
                title={technology.categoryTitle}
                techs={technology.techs}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}
