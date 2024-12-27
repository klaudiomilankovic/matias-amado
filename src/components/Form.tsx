import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import type { DataContact } from "../types/types";
import { Forward } from "../icons/MySvgs";

const Error = () => {
  return <div className="font-bold text-sm">Debes completar este campo</div>;
};

const Form = () => {
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const api = "https://aestethicmedicinecenter.com/backend/send-email.php";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: DataContact) => {
    setSending(true);
    const sender = {
      to: "ma.cirugia.plastica@outlook.com.ar",
      from: "no-reply@thk-avalos.com",
      from_name: "Matias Amado",
      subject: "Contacto",
    };

    axios
      .post(api, {
        ...data,
        ...sender,
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

  const text = {
    es: {
      name: "Nombre y Apellido",
      city: "Ciudad",
      email: "E-Mail",
      address: "Localidad",
      phone: "Teléfono",
      country: "País",
      message: "Mensaje",
      send: "Enviar",
      thanks: "Gracias por contactarte con nosotros.",
      error: "Se produjo un error al enviar el mensaje :-(",
    },
  };

  return (
    <>
      {error ? (
        <span className="text-2xl font-bold">{text["es"].error}</span>
      ) : sended ? (
        <span className="text-3xl font-bold">{text["es"].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-2 mb-4">
            <div>
              <input
                {...register("name", { required: true })}
                placeholder={text["es"].name}
                className="w-full h-11 p-3"
              />
              {errors.name && <Error />}
            </div>
            <div>
              <input
                {...register("city")}
                placeholder={text["es"].city}
                className="w-full h-11 p-3"
              />
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
                {...register("address")}
                placeholder={text["es"].address}
                className="w-full h-11 p-3"
              />
            </div>
            <div>
              <input
                {...register("phone")}
                placeholder={text["es"].phone}
                className="w-full h-11 p-3"
              />
            </div>
            <div>
              <input
                {...register("country")}
                placeholder={text["es"].country}
                className="w-full h-11 p-3"
              />
            </div>
          </div>
          <div>
            <textarea
              {...register("message", { required: true })}
              className="w-full p-3 h-32 "
              placeholder={text["es"].message}
            />
            {errors.message && <Error />}
          </div>
          <div>
            {sending ? (
              <div className="mt-4">
                <BeatLoader />
              </div>
            ) : (
              <button className="bg-primary text-white font-bold px-6 py-3 mt-4 transition-colors hover:bg-black flex justify-between items-center w-1/2">
                <span>{text["es"].send}</span>
                <span>
                  <Forward />
                </span>
              </button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
