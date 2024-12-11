import FormMini from "./FormMini";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import Text from "../hooks/useHTML";
import { Helmet } from "react-helmet";
import type { Props } from "../types/types";
import { Link } from "react-router-dom";

const Description = ({ id }) => {
  const { data, loading } = useFetch(`/trabajos/${id}`) as Props;

  if (loading)
    return (
      <section className="px-14 py-20 md:flex gap-16 mb-8">
        <Loader />
      </section>
    );

  return (
    <section className="px-6 lg:px-14 py-20 lg:flex gap-12 mx-auto max-w-7xl">
      <div className="lg:w-3/4">
        <div className="mb-12 grid grid-cols-2  gap-x-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{data[0].title}</h1>
          </div>
        </div>

        <div className="border-t-2 border-b-2 border-primary py-12 mb-8 flex flex-col items-start gap-y-6">
          <h3 className="font-bold text-2xl">Descripción</h3>
          <p className="text-secondary text-wrap-balance whitespace-break-spaces ">
            <Text text={data[0].text} />
          </p>
        </div>

        <Link
          to="/pre-consulta"
          className="bg-primary px-8 py-3 font-bold hover:bg-black transition-colors text-white"
        >
          Pre-Consulta Online
        </Link>
      </div>
      <div className="lg:w-1/4">
        <h1 className="text-2xl font-bold mb-8">Envianos un mensaje</h1>
        <FormMini />
      </div>

      <Helmet>
        <title>Matias Amado &bull; {data[0].title}</title>
        <meta name="description" content={data[0].text_short} />
      </Helmet>
    </section>
  );
};

export default Description;
