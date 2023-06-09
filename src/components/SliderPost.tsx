import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import { Whatsapp } from "./MySvgs";

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

const SliderPost = () => {
  const { data, loading } = useFetch(`/imagenes`) as SliderProps;

  const properties = {
    arrows: false,
    transitionDuration: 700,
    pauseOnHover: false,
    autoplay: true,
    indicators: false,
  };

  return (
    <section className="overflow-hidden" id="slider-post">
      {loading ? <Loader /> : <Slide {...properties}>{data && data.map((image) => <SliderItem key={image.id} src={image.image} />)}</Slide>}

      <a href="https://wa.me/5493874685060" target="_blank" rel="noreferrer" className="fixed z-20 bottom-8 right-8 drop-shadow-hover drop-shadow svg-primary">
        <Whatsapp />
      </a>
    </section>
  );
};

export default SliderPost;
