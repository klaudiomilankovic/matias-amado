import { Link } from "react-router-dom";
import Image from "../components/ImageComponent";

const More = () => {
  return (
    <section className="flex items-center justify-center" id="section-more">
      <div className="absolute p-8 text-center z-10 text-white text-4xl md:text-5xl">
        <h1 className="font-bold mb-2">Estética cosmética</h1>
        <h2 className="mb-8 font-light">¿Necesitas asesoramiento?</h2>
        <Link to="/contacto" className="bg-primary px-12 py-3 font-bold text-xl hover:bg-black transition-all">
          Contactanos
        </Link>
      </div>

      <Image src="/images/img-more.jpg" />
    </section>
  );
};

export default More;
