import { Forward } from "../../icons/MySvgs";

const Pago = () => {
  return (
    <div className="w-full flex flex-col gap-y-3 max-w-4xl">
      <div>
        Gracias por enviar tus fotos y datos. Recibirás un email con el informe
        médico y el presupuesto por parte del Dr. Matías Amado a la brevedad
        luego de realizar el siguiente pago.
      </div>

      <a
        href="https://mpago.la/1BRNKHD"
        className="bg-primary text-white font-bold px-6 py-3 mt-4 transition-colors hover:bg-black flex justify-between items-center w-64"
      >
        <span>Proceder al pago</span>
        <span>
          <Forward />
        </span>
      </a>
    </div>
  );
};

export default Pago;
