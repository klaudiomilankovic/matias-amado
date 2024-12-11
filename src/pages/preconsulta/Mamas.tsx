import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layout/Layout";
import FormMini from "../../components/FormMini";
import DragFiles from "./DragFiles";
import ItemReferencias from "./ItemReferencias";
import { Forward } from "../../icons/MySvgs";
import Image from "../../components/ImageComponent";

const Rinoplastia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const referencias = [
    {
      title: "Foto de frente. Desde altura de cintrura hacia arriba.",
      image: "/images/mamas-refe-1.jpg",
    },
    {
      title: "Foto de perfil derecho.",
      image: "/images/mamas-refe-2.jpg",
    },
    {
      title:
        "Foto de frente. Brazos levantados hacia arriba altura de hombros.",
      image: "/images/mamas-refe-3.jpg",
    },
    {
      title: "Foto de perfil izquierdo.",
      image: "/images/mamas-refe-4.jpg",
    },
  ];

  return (
    <Layout>
      <section className="px-6 lg:px-14 mt-20 aspect-square lg:aspect-[16/6]">
        <Image src="/images/mamas.jpg" alt="Fotografía de unas mamas" />
      </section>

      <section className="px-6 lg:px-14 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 mx-auto max-w-7xl">
        <div className="lg:w-3/4">
          <div className="mb-6 grid grid-cols-2 gap-x-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Cirugía de mamas
              </h1>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-white bg-primary py-4 px-12 font-bold text-3xl text-center">
                $30.0000
              </span>
              <span className="text-sm font-bold">
                El valor de la pre-consulta online incluye diagnóstico y
                presupuesto.
              </span>
            </div>
          </div>
          <section className="border-t-2 border-b-2 border-primary py-12 flex flex-col items-start gap-y-6">
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-2xl">Descripción</h3>
              <p className="text-secondary text-wrap-balance">
                A través de la siguiente encuesta y fotografías recibirás por
                correo electrónico un Informe Médico y Presupuesto por parte del
                Dr. Matías Amado. Así mismo recibirás toda la información acerca
                de estudios complementarios, fechas disponibles y asistencia
                personalizada para agendar tu cirugía.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-2xl">Tipo de cirugía de mamas</h3>
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  className="border-2 border-primary w-5 h-5 bg-white"
                  name="levantamiento"
                  id="levantamiento"
                />
                <label className="font-medium" htmlFor="levantamiento">
                  LEVANTAMIENTO
                </label>
              </div>
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  className="border-2 border-primary w-5 h-5 bg-white"
                  name="aumento"
                  id="aumento"
                />
                <label className="font-medium" htmlFor="aumento">
                  AUMENTO DE MAMARIO
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-2xl">Edad</h3>
              <input
                type="number"
                name="edad"
                className="w-full lg:w-72 h-11 p-3"
                placeholder="Debe ser mayor de 18 años."
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-2xl">¿Partos naturales?</h3>
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  className="border-2 border-primary w-5 h-5 bg-white"
                  name="tipo-de-cirugia"
                  id="tipo-de-cirugia"
                />
                <label className="font-medium" htmlFor="tipo-de-cirugia">
                  SI
                </label>
              </div>
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  className="border-2 border-primary w-5 h-5 bg-white"
                  name="tipo-de-cirugia"
                  id="tipo-de-cirugia"
                />
                <label className="font-medium" htmlFor="tipo-de-cirugia">
                  NO
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-2xl">¿Césareas?</h3>
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  className="border-2 border-primary w-5 h-5 bg-white"
                  name="tipo-de-cirugia"
                  id="tipo-de-cirugia"
                />
                <label className="font-medium" htmlFor="tipo-de-cirugia">
                  SI
                </label>
              </div>
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  className="border-2 border-primary w-5 h-5 bg-white"
                  name="tipo-de-cirugia"
                  id="tipo-de-cirugia"
                />
                <label className="font-medium" htmlFor="tipo-de-cirugia">
                  NO
                </label>
              </div>
            </div>
            <div>
              <span className="font-bold text-xl block">
                Carga las fotos de tu rostro.
              </span>
              <span className="font-italic">
                Sigue las instrucciones para cada imagen según las siguiente
                ilustraciones.
              </span>
            </div>
            <div className="w-full">
              <DragFiles />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {referencias.map((item, index) => (
                <ItemReferencias data={item} key={index} />
              ))}
            </div>
            <div className="w-full">
              <button className="bg-primary text-white font-bold px-6 py-3 mt-4 transition-colors hover:bg-black flex justify-between items-center w-full lg:w-1/3">
                <span>Proceder al pago</span>
                <span>
                  <Forward />
                </span>
              </button>
            </div>
          </section>
        </div>
        <div className="lg:w-1/4">
          <h1 className="text-2xl font-bold mb-8">Envianos un mensaje</h1>
          <FormMini />
        </div>

        <Helmet>
          <title>Matias Amado &bull; Pre Consulta Cirugía de mamas</title>
        </Helmet>
      </section>
    </Layout>
  );
};

export default Rinoplastia;
