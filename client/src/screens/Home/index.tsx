import { Container } from "./styles";
import Spacer from "../../components/Spacer";
import AboutUs from "../../containers/AboutUs";
import OurVision from "../../containers/OurVision";
import Services from "../../containers/Services";
import HomeSlider from "../../containers/HomeSlider";
import Technologies from "../../containers/Technologies";
import Portfolio from "../../containers/Portfolio";
import Contact from "../../containers/Contact";
import Footer from "../../containers/Footer";
import FAQ from "../../containers/FAQ";

export default function Home() {
  return (
    <>
      <HomeSlider />

      <Container>
        <AboutUs />
        <Spacer size="130px" />
        <OurVision />
        <Spacer size="130px" />
        <Services />
        <Spacer size="130px" />
        <Technologies />
        <Spacer size="130px" />
        <Portfolio />
        <Spacer size="130px" />
        <FAQ />
        <Spacer size="130px" />
        <Contact />
        <Spacer size="130px" />
        <Footer />
      </Container>
    </>
  );
}
