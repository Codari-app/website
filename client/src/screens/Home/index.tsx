import BackgroundShape from "../../components/BackgroundShape";
import Header from "../../components/Header";
import About from "../../containers/About";
import Benefits from "../../containers/Benefits";
import Hero from "../../containers/Hero";
import Showcase from "../../containers/Showcase";
import { Gradient } from "./styles";

function Home() {
  return (
    <Gradient>
      <BackgroundShape />
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Showcase />
    </Gradient>
  );
}

export default Home;
