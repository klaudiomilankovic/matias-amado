import { Forward } from "../../icons/MySvgs";

const Pago = () => {
  return (
    <div className="w-full">
      <a
        href="https://mpago.la/1BRNKHD"
        className="bg-primary text-white font-bold px-6 py-3 mt-4 transition-colors hover:bg-black flex justify-between items-center w-full lg:w-1/3"
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
