import Layout from "../../layout/Layout";
import Form from "../../components/Form";

const Contacto = () => {
  return (
    <Layout>
      <section className="mt-48 px-14 fade-in">
        <div className="m-auto w-full max-w-2xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contacto</h1>
          <Form />
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
