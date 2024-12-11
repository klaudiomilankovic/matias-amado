import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layout/Layout";
import FormMini from "../../components/FormMini";
import DragFiles from "./DragFiles";
import ItemReferencias from "./ItemReferencias";
import { Forward } from "../../icons/MySvgs";
import Image from "../../components/ImageComponent";

const Rinoplastia = () => {
  const [imc, setImc] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const referencias = [
    {
      title: "De frente. Cuerpo completo, brazos extendidos hacia arriba.",
      image: "/images/contorno-refe-1.jpg",
    },
    {
      title: "Perfil izquierdo. Brazos extendidos hacia al frente.",
      image: "/images/contorno-refe-2.jpg",
    },
    {
      title: "De frente. Cuerpo completo, brazos extendidos hacia arriba.",
      image: "/images/contorno-refe-3.jpg",
    },
    {
      title: "Perfil derecho. Brazos extendidos hacia al frente.",
      image: "/images/contorno-refe-4.jpg",
    },
    {
      title: "De frente. Sentado, contrayendo el abdomen.",
      image: "/images/contorno-refe-5.jpg",
    },
  ];

  const handleChange = () => {
    const weightValue = document.getElementById("weight") as HTMLInputElement;
    const heightValue = document.getElementById("height") as HTMLInputElement;

    if (!isNaN(+weightValue.value) || weightValue.value === "") {
      setWeight(+weightValue.value);
    }

    if (!isNaN(+heightValue.value) || heightValue.value === "") {
      setHeight(+heightValue.value);
    }
    const imcValue: number = Math.round(
      (+weightValue.value / (+heightValue.value * +heightValue.value)) * 10000
    );

    if (imcValue < 0 || imcValue > 100) {
      setImc(0);
    } else {
      setImc(imcValue);
    }
  };

  return (
    <Layout>
      <section className="px-6 lg:px-14 mt-20 aspect-square lg:aspect-[16/6]">
        <Image
          src="/images/contorno.jpg"
          alt="Fotografía de un contorno corporal"
        />
      </section>

      <section className="px-6 lg:px-14 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 mx-auto max-w-7xl">
        <div className="lg:w-3/4">
          <div className="mb-6 grid grid-cols-2 gap-x-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Contorno corporal
              </h1>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-white bg-primary py-4 px-12 font-bold text-3xl text-center">
                $10.0000
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
              <h3 className="font-bold text-2xl">
                Calculadora de índice de masa corporal
              </h3>
              <div className="w-full flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-3">
                  <div>
                    <h3 className="font-bold">Peso (Kg)</h3>
                    <span className="font-italic">
                      El peso tiene que ser mayor a 30 kg y menor a 250 kg.
                    </span>
                  </div>
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    className="w-full h-11 p-3"
                    value={weight}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <h3 className="font-bold">Estatura (Cm)</h3>
                    <span className="font-italic">
                      La estatura tiene que ser mayor a 110 cm y menor a 250 cm.
                    </span>
                  </div>
                  <input
                    type="text"
                    name="height"
                    className="w-full h-11 p-3"
                    value={height}
                    id="height"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <h3 className="font-bold">Índice de masa corporal</h3>
                    <span className="font-italic">
                      IMPORTANTE: El IMC debe ser menor a 27, caso contrario no
                      se procederá con la consulta.
                    </span>
                  </div>
                  <input
                    type="text"
                    name="masa-corporal"
                    disabled
                    className="w-full h-11 p-3"
                    value={imc}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold text-2xl">Tipo de cirugía corporal</h3>
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  className="border-2 border-primary w-5 h-5 bg-white"
                  name="levantamiento"
                  id="levantamiento"
                />
                <label className="font-medium" htmlFor="levantamiento">
                  LIPOESCULTURA
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
                  ABDOMINOPLASTÍA
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
                  AUMENTO DE GLÚTEOS
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
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
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
          <title>Matias Amado &bull; Pre Consulta Contorno corporal</title>
        </Helmet>
      </section>
    </Layout>
  );
};

export default Rinoplastia;
