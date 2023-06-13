import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import SliderPost from "../../components/SliderPost";
import Description from "../../components/Description";

const Post = () => {
  const { id } = useParams();

  return (
    <Layout>
      <SliderPost id={id} />
      <Description id={id} />
    </Layout>
  );
};

export default Post;
