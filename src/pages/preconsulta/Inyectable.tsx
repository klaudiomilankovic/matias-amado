import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import type { DataContact } from "../../types/types";
import Layout from "../../layout/Layout";
import Image from "../../components/ImageComponent";
import Pago from "./Pago";
import BeatLoader from "react-spinners/BeatLoader";
import { Forward } from "../../icons/MySvgs";

const Error = () => {
  return <div className="font-bold text-sm">Falta completar este dato</div>;
};

const Rinoplastia = () => {
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const api =
    "https://aestethicmedicinecenter.com/backend/send-preconsulta.php";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: DataContact) => {
    setSending(true);

    const sender = {
      to: "ma.cirugia.plastica@outlook.com.ar",
      from: "no-reply@matiasamado.com",
      from_name: "Matias Amado",
      subject: "Pre-consulta Face Inyectable",
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("sender", JSON.stringify(sender));
    formData.append("image1", selectedImage1);
    formData.append("image2", selectedImage2);
    formData.append("image3", selectedImage3);
    formData.append("image4", selectedImage4);

    axios
      .post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
        setSended(true);
        setSending(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
        setSending(false);
      });
  };

  const handleImageChange1 = (event) => {
    setSelectedImage1(event.target.files[0]);
  };
  const handleImageChange2 = (event) => {
    setSelectedImage2(event.target.files[0]);
  };
  const handleImageChange3 = (event) => {
    setSelectedImage3(event.target.files[0]);
  };
  const handleImageChange4 = (event) => {
    setSelectedImage4(event.target.files[0]);
  };

  const text = {
    es: {
      name: "Nombre y Apellido",
      email: "E-Mail",
      phone: "Teléfono",
      age: "Edad (debe ser mayor de 18 años)",
      message: "Mensaje",
      send: "Enviar",
      error: "Se produjo un error al enviar el mensaje :-(",
    },
  };

  return (
    <Layout>
      <section className="px-6 lg:px-14 mt-20 aspect-square lg:aspect-[16/6]">
        <Image
          src="/images/inyectable.webp"
          alt="Fotografía de una rinoplastia"
        />
      </section>
      <section className="px-6 lg:px-14 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 mx-auto max-w-7xl">
        <div>
          <div className="mb-6 grid grid-cols-2 gap-x-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Full Face Inyectable
            </h1>
          </div>

          {error ? (
            <span className="text-2xl font-bold">{text["es"].error}</span>
          ) : sended ? (
            <Pago />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="border-t-2 border-b-2 border-primary py-12 flex flex-col items-start gap-y-6">
                <div className="flex flex-col gap-y-3">
                  <h3 className="font-bold text-2xl">Descripción</h3>
                  <p className="text-secondary text-wrap-balance">
                    A través de la siguiente encuesta y fotografías recibirás
                    por correo electrónico un Informe Médico y Presupuesto por
                    parte del Dr. Matías Amado. Así mismo recibirás toda la
                    información acerca de estudios complementarios, fechas
                    disponibles y asistencia personalizada para agendar tu
                    cirugía.
                  </p>
                </div>

                <div className="flex flex-col gap-y-3">
                  <h3 className="font-bold text-2xl">
                    ¿Te realizaste previamente alguna vez rellenos faciales?
                  </h3>
                  <div className="flex gap-8">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="si"
                      >
                        <input
                          {...register("previous", { required: true })}
                          placeholder=""
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                          type="radio"
                          value="Si"
                          id="si"
                        />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                        htmlFor="si"
                      >
                        Si
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="no"
                      >
                        <input
                          {...register("previous", { required: true })}
                          placeholder=""
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                          type="radio"
                          value="No"
                          id="no"
                        />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label className="ml-2 text-slate-600 cursor-pointer text-sm">
                        No
                      </label>
                    </div>
                  </div>
                  <div>
                    {errors.previous && (
                      <span className="font-bold text-sm">
                        Debes seleccionar una opción
                      </span>
                    )}
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

                <div className="grid grid-cols-2 gap-4 max-w-3xl">
                  <article className="flex flex-col gap-y-2  items-start">
                    <div className="font-bold text text-sm h-14 flex items-center">
                      <h2>Foto de perfil izquierdo.</h2>
                    </div>
                    <div className="aspect-[4/6]">
                      <img
                        className="w-full h-full object-cover"
                        src="/images/Recurso3.png"
                        alt="Foto de perfil izquierdo."
                      />
                    </div>
                    <input
                      {...register("image1", { required: true })}
                      className="w-full h-11 border-0 mt-2"
                      type="file"
                      onChange={handleImageChange1}
                    />
                    <div className="text-left w-full">
                      {errors.image1 && <Error />}
                    </div>
                  </article>
                  <article className="flex flex-col gap-y-2  items-start">
                    <div className="font-bold text text-sm h-14 flex items-center">
                      <h2>Foto de frente.</h2>
                    </div>
                    <div className="aspect-[4/6]">
                      <img
                        className="w-full h-full object-cover"
                        src="/images/Recurso4.png"
                        alt="Foto de frente."
                      />
                    </div>
                    <input
                      {...register("image2", { required: true })}
                      className="w-full h-11 border-0 mt-2"
                      type="file"
                      onChange={handleImageChange2}
                    />
                    <div className="text-left w-full">
                      {errors.image2 && <Error />}
                    </div>
                  </article>
                  <article className="flex flex-col gap-y-2  items-start">
                    <div className="font-bold text text-sm h-14 flex items-center">
                      <h2>Foto de perfil derecho.</h2>
                    </div>
                    <div className="aspect-[4/6]">
                      <img
                        className="w-full h-full object-cover"
                        src="/images/Recurso5.png"
                        alt="Foto de perfil derecho."
                      />
                    </div>
                    <input
                      {...register("image3", { required: true })}
                      className="w-full h-11 border-0 mt-2"
                      type="file"
                      onChange={handleImageChange3}
                    />
                    <div className="text-left w-full">
                      {errors.image3 && <Error />}
                    </div>
                  </article>
                  <article className="flex flex-col gap-y-2  items-start">
                    <div className="font-bold text text-sm h-14 flex items-center">
                      <h2>Foto rostro inclinado hacia arriba.</h2>
                    </div>
                    <div className="aspect-[4/6]">
                      <img
                        className="w-full h-full object-cover"
                        src="/images/Recurso6.png"
                        alt="Foto rostro inclinado hacia arriba."
                      />
                    </div>
                    <input
                      {...register("image4", { required: true })}
                      className="w-full h-11 border-0 mt-2"
                      type="file"
                      onChange={handleImageChange4}
                    />
                    <div className="text-left w-full">
                      {errors.image4 && <Error />}
                    </div>
                  </article>
                </div>
                <div className="flex flex-col gap-y-3 w-full max-w-xl">
                  <h1 className="font-bold text-2xl">Datos personales</h1>
                  <div>
                    <input
                      {...register("name", { required: true })}
                      placeholder={text["es"].name}
                      className="w-full h-11 p-3"
                      type="text"
                    />
                    {errors.name && <Error />}
                  </div>
                  <div>
                    <input
                      {...register("age", { required: true })}
                      placeholder={text["es"].age}
                      className="w-full h-11 p-3"
                    />
                    {errors.age && <Error />}
                  </div>
                  <div>
                    <input
                      {...register("email", { required: true })}
                      placeholder={text["es"].email}
                      className="w-full h-11 p-3"
                    />
                    {errors.email && <Error />}
                  </div>
                  <div>
                    <input
                      {...register("phone")}
                      placeholder={text["es"].phone}
                      className="w-full h-11 p-3"
                    />
                  </div>
                </div>
                <div>
                  {sending ? (
                    <BeatLoader />
                  ) : (
                    <button className="bg-primary text-white font-bold px-6 py-3 mt-4 transition-colors hover:bg-black flex justify-between items-center w-64">
                      <span> {text["es"].send}</span>
                      <span>
                        <Forward />
                      </span>
                    </button>
                  )}
                </div>
              </section>
            </form>
          )}
        </div>

        <Helmet>
          <title>Matias Amado &bull; Pre Consulta Rinoplastia</title>
        </Helmet>
      </section>
    </Layout>
  );
};

export default Rinoplastia;
