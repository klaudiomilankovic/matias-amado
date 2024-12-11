import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Destacados from "./Destacados";
import Layout from "../../layout/Layout";
import Image from "../../components/ImageComponent";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      text: "Presupuesto personalizado del procedimiento quirúrgico que elegiste.",
    },
    {
      text: "Información sobre estudios complementarios necesarios para llevar acabo el procedimiento.",
    },
    {
      text: "Fechas disponibles y asistencia personalizada para agendar tu cirugía.",
    },
    {
      text: "Recomendaciones importantes para lograr el cambio que deseás.",
    },
  ];
  return (
    <Layout>
      <section className="px-6 lg:px-14 mt-20 aspect-square lg:aspect-[16/6]">
        <Image src="/images/matias-amado.jpg" alt="Matias Amado" />
      </section>
      <section className="mx-auto max-w-5xl py-12 px-6 text-center flex flex-col gap-y-6 lg:gap-y-12">
        <h1 className="text-3xl md:text-5xl font-bold">Pre-Consulta Online</h1>
        <div className="lg:text-xl flex flex-col gap-y-3 mx-auto max-w-4xl">
          <p>
            El primer paso hacia tu próxima cirugía es tan simple como una
            consulta virtual desde la comodidad de tu hogar. Aquí,{" "}
            <strong>
              recibirás un diagnóstico detallado y un presupuesto adaptado
              específicamente para ti.
            </strong>
          </p>
          <p>
            Sabemos que decidir someterse a una cirugía es una gran decisión, ya
            que implica cambios importantes en tu vida. Es por eso que nos
            tomamos muy en serio cada paso del proceso. Entendemos que cada
            paciente es único, con sus propias necesidades y preocupaciones, por
            lo que nos aseguramos de proporcionarte un plan quirúrgico
            personalizado y un presupuesto preciso.
          </p>
          <p>
            En nuestro enfoque,{" "}
            <strong>
              tu bienestar y comodidad son nuestra prioridad absoluta.
            </strong>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-6 px-24 lg:px-0">
          <article className="flex flex-col items-center gap-y-6 text-center">
            <div className="h-20 lg:h-28 flex items-center">
              <img
                src="/images/icon-1.svg"
                className="w-16 lg:w-24"
                alt="Icono 1"
              />
            </div>
            <div>
              <h2 className="font-bold lg:text-xl uppercase">
                Elegí el procedimiento de tu interés
              </h2>
            </div>
          </article>
          <article className="flex flex-col items-center gap-y-6 text-center">
            <div className="h-20 lg:h-28 flex items-center">
              <img
                src="/images/icon-2.svg"
                className="w-16 lg:w-24"
                alt="Icono 2"
              />
            </div>
            <div>
              <h2 className="font-bold lg:text-xl uppercase">
                Completá el formulario y subí las fotos
              </h2>
            </div>
          </article>
          <article className="flex flex-col items-center gap-y-6 text-center">
            <div className="h-20 lg:h-28 flex items-center">
              <img
                src="/images/icon-3.svg"
                className="w-20 lg:w-28"
                alt="Icono 3"
              />
            </div>
            <div>
              <h2 className="font-bold lg:text-xl uppercase">
                Realizá el pago
              </h2>
              <span className="opacity-50">
                (Tarjeta de crédito o Mercado Pago)
              </span>
            </div>
          </article>
        </div>
        <div>
          <article className="flex flex-col items-center gap-y-6 text-center">
            <div className="h-20 lg:h-28 flex items-center">
              <img
                src="/images/icon-4.svg"
                className="w-16 lg:w-28"
                alt="Icono 3"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl uppercase mb-3">¡Listo!</h2>
              <div className="max-w-xl font-bold">
                Vas a recibir por correo electrónico un informe médico del Dr.
                Matías Amado luego de evaluar tu caso, en el que vas a
                encontrar:
              </div>
            </div>
          </article>
        </div>
        <div className="px-4">
          <ul className="list-disc grid grid-cols-2 gap-6 font-bold text-left">
            {data.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-6 bg-primary text-white text-center py-16 lg:py-24 flex flex-col gap-y-6 mb-6">
        <h3 className="font-bold text-3xl md:text-5xl">
          La Pre-Consulta es para:
        </h3>
        <div className="font-light lg:text-xl max-w-4xl mx-auto">
          Realizar el primer paso para encaminar tu cirugía. <br />
          Recibir de manera online una valoración y un presupuesto sin moverte
          de tu casa. <br />
          Recibir todo por escrito en poco tiempo y coordinar una consulta
          presencial.
        </div>
      </section>
      <Destacados />

      <Helmet>
        <title>Matias Amado &bull; Pre Consulta</title>
      </Helmet>
    </Layout>
  );
};

export default Index;
