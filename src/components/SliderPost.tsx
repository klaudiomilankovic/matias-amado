import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

type SliderItemProps = {
  src: string;
};

const SliderItem = ({ src }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? <Loader /> : <img src={src} className="fade-in h-screen w-full object-cover" />;
};

type SliderProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
  error: null;
};

const SliderPost = ({ id }) => {
  const { data, loading } = useFetch(`/imagenes/${id}`) as SliderProps;
  const url = "http://matiasamado.com/backend/images/";

  const properties = {
    arrows: false,
    transitionDuration: 700,
    pauseOnHover: false,
    autoplay: true,
    indicators: false,
  };

  return (
    <section className="overflow-hidden" id="slider-post">
      {loading ? <Loader /> : <Slide {...properties}>{data && data.map((image) => <SliderItem key={image.id} src={url + image.image} />)}</Slide>}
    </section>
  );
};

export default SliderPost;
