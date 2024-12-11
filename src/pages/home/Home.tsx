import Layout from "../../layout/Layout";
import About from "../../components/About";
import More from "../../components/More";
import Slider from "../../components/Slider";
import Works from "../../components/Works";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <More />
      <About />
      <Works title="Tratamientos destacados" />
    </Layout>
  );
};

export default Home;
