import BackgroundShape from "../../components/BackgroundShape";
import Header from "../../components/Header";
import About from "../../containers/About";
import Hero from "../../containers/Hero";
import { Gradient } from "./styles";

function Home() {
  return (
    <Gradient>
      <BackgroundShape />
      <Header />
      <Hero />
      <About />
    </Gradient>
  );
}

export default Home;
