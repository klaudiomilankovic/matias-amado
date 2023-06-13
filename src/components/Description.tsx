import FormMini from "./FormMini";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";
import Text from "../hooks/useHTML";
import { Helmet } from "react-helmet";
import type { Props } from "../types/types";

const Description = ({ id }) => {
  const { data, loading } = useFetch(`/trabajos/${id}`) as Props;

  if (loading)
    return (
      <section className="px-14 py-20 md:flex gap-16 mb-8">
        <Loader />
      </section>
    );

  return (
    <>
      <section className="px-14 py-20 md:flex gap-16 mb-8">
        <div className="md:w-3/4">
          <h1 className="text-4xl md:text-5xl font-bold mb-14 uppercase">{data[0].title}</h1>
          <div className="border-t border-b border-black py-8 mb-8 md:px-4 ">
            <p className="text-secondary">
              <Text text={data[0].text} />
            </p>
          </div>
        </div>
        <div className="md:w-1/4">
          <h1 className="text-2xl font-bold mb-8">Envianos un mensaje</h1>
          <FormMini />
        </div>
      </section>

      <Helmet>
        <title>Matias Amado &bull; {data[0].title}</title>
        <meta name="description" content={data[0].text_short} />
      </Helmet>
    </>
  );
};

export default Description;
