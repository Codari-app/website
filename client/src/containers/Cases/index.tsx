import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Title from "../../components/Title";
import cases from "../../data/cases";
import { CaseCard, CaseDescription, CasesStyles } from "./styles";

function Cases() {
  return (
    <CasesStyles>
      <Title variant="white">Cases Codari</Title>

      <Swiper
        spaceBetween={10} // espaço entre os slides
        slidesPerView={"auto"} // largura fixa dos slides respeitada
        centeredSlides={true} // centraliza o slide ativo
        grabCursor={true} // mãozinha
        initialSlide={Math.floor(cases.length / 2)}
        style={{
          marginTop: "70px",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {cases.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: "410px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CaseCard>
              <img src={item.image} alt={item.title} />
              <CaseDescription>
                <p>{item.title}</p>
              </CaseDescription>
            </CaseCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </CasesStyles>
  );
}

export default Cases;
