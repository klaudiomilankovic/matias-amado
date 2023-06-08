import { useEffect, useState } from "react";
import Loader from "./Loader";

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return isLoading ? <Loader /> : <img src={src} alt={alt} className="fade-in h-full w-full object-cover" />;
};

export default ImageComponent;
