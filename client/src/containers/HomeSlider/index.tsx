import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Button from "../../components/Button";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Background, Hero } from "./styles";
import { scrollToSection } from "../../utils";

export default function HomeSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    "https://res.cloudinary.com/dynwptmib/image/upload/v1753232406/background1_f7mbvr.png",
    "https://res.cloudinary.com/dynwptmib/image/upload/v1753232449/background3_l3bosb.jpg",
    "https://res.cloudinary.com/dynwptmib/image/upload/v1753232515/background2_hwudn3.jpg",
    "https://res.cloudinary.com/dynwptmib/image/upload/v1753232535/background4_io3bwe.jpg",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 3000 }}
      loop
      slidesPerView={1}
      speed={800}
      effect="fade"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      id="home"
    >
      {images.map((image, i) => (
        <SwiperSlide
          key={i}
          style={{
            height: "100vh",
            width: "100vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Background $image={image} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <Hero>
              <h1>Criando o futuro, rompendo barreiras.</h1>
              <Button onclick={() => scrollToSection("about")} fill>
                Começar agora
              </Button>
            </Hero>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
