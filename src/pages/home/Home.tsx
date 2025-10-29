import Layout from "../../layout/Layout";
import About from "../../components/About";
import More from "../../components/More";
import Video from "../../components/Video";
import Works from "../../components/Works";
import CrisalixReviews from "../../components/CrisalixReviews";

const Home = () => {
  return (
    <Layout>
      <Video />
      <More />
      <About />
      <CrisalixReviews />
      <Works title="Tratamientos destacados" />
    </Layout>
  );
};

export default Home;
