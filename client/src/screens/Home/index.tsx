import BackgroundShape from "../../components/BackgroundShape";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "../../containers/About";
import Benefits from "../../containers/Benefits";
import Cases from "../../containers/Cases";
import Form from "../../containers/Form";
import Hero from "../../containers/Hero";
import Partners from "../../containers/Partners";
import Showcase from "../../containers/Showcase";
import { Divisor, Gradient } from "./styles";

function Home() {
  return (
    <Gradient>
      <BackgroundShape />
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Showcase />
      <Cases />
      <Divisor />
      <Partners />
      <Form />
      <Footer />
    </Gradient>
  );
}

export default Home;
