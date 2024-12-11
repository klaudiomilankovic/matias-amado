import { Link } from "react-router-dom";
import Image from "../components/ImageComponent";

const More = () => {
  return (
    <section className="flex items-center justify-center" id="section-more">
      <div className="absolute flex flex-col gap-y-3 items-center p-8 text-center z-10 text-4xl md:text-5xl">
        <h1 className="font-bold text-primary">¿Necesitas asesoramiento?</h1>
        <h2 className="max-w-2xl font-light text-white">
          Recibí un diagnóstico desde la comodidad de tu hogar.
        </h2>
        <Link
          to="/pre-consulta"
          className="bg-primary mt-6 px-8 py-3 font-bold text-xl lg:text-2xl hover:bg-black transition-colors text-white"
        >
          Pre-Consulta Online
        </Link>
      </div>

      <Image src="/images/img-more.jpg" />
    </section>
  );
};

export default More;
