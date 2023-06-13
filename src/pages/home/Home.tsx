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
      <Works />
    </Layout>
  );
};

export default Home;
