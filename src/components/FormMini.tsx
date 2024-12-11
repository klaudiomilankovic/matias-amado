import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import type { DataContact } from "../types/types";
import { Forward } from "../icons/MySvgs";

const Error = () => {
  return <div className="font-bold text-sm">Debes completar este campo</div>;
};

const FormMini = () => {
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: DataContact) => {
    setSending(true);
    const sender = {
      to: " ",
      from: "no-reply@thk-avalos.com",
      from_name: "Matias Amado",
      subject: "Contacto",
    };

    axios
      .post("https://thk-avalos.com/backend/send-email.php", {
        ...data,
        ...sender,
      })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      })
      .catch(() => {
        setError(true);
        setSended(false);
      });
  };

  const text = {
    es: {
      name: "Nombre y Apellido",
      email: "E-Mail",
      phone: "Teléfono",
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
          <div className="grid gap-4 mb-4">
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
            <textarea
              {...register("message", { required: true })}
              className="w-full p-3 h-32 "
              placeholder={text["es"].message}
            />
            {errors.message && <Error />}
          </div>
          <div>
            {sending ? (
              <BeatLoader />
            ) : (
              <button className="bg-primary w-full text-left text-white font-bold px-6 py-3 transition-colors mt-4 hover:bg-black flex justify-between items-center">
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

export default FormMini;
