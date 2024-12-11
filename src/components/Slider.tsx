import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import { WhatsApp } from "../icons/MySvgs";
import { Link } from "react-router-dom";

type SliderItemProps = {
  src: string;
  alt: string;
};

const SliderItem = ({ src, alt }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://matiasamado.com/backend/images/";

  useEffect(() => {
    const image = new Image();
    image.src = url + src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? (
    <Loader />
  ) : (
    <img
      src={url + src}
      alt={alt}
      className="fade-in h-screen w-screen object-cover"
    />
  );
};

type SliderProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
};

const Slider = () => {
  const { data, loading } = useFetch(`/home`) as SliderProps;

  const properties = {
    arrows: false,
    transitionDuration: 700,
    pauseOnHover: false,
    autoplay: true,
    indicators: true,
  };

  type Image = {
    id: number;
    image: string;
  };

  return (
    <section className="h-screen overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <Slide {...properties}>
          {data &&
            data.map((image: Image) => (
              <SliderItem
                key={image.id}
                src={image.image}
                alt="Imagen de fondo"
              />
            ))}
        </Slide>
      )}

      <a
        href="https://wa.me/5493874685060"
        target="_blank"
        rel="noreferrer"
        className="fixed z-20 bottom-8 right-8 bg-primary rounded-full p-3 text-white hover:bg-black transition-colors"
      >
        <WhatsApp />
      </a>

      <div className="fixed z-20 bottom-10 left-8">
        <Link
          to="/pre-consulta"
          className="bg-primary px-8 py-3 font-bold hover:bg-black transition-colors text-white"
        >
          Pre-Consulta Online
        </Link>
      </div>
    </section>
  );
};

export default Slider;
