import { Link } from "react-router-dom";
import Image from "../components/ImageComponent";

const Items = () => {
  return (
    <article className="item border border-black relative">
      <div className="item-img">
        <Link to="/detalles/2">
          <div className="aspect-video object-cover hover:opacity-80 transition-opacity">
            <Image src="https://thk-avalos.com/backend/images/avalos_cc370695f9.jpg" alt="" />
          </div>
        </Link>
      </div>
      <div className="item-txt p-4 h-44">
        <h3 className="text-sm text-black mb-2">Quirúrgicos</h3>
        <h2 className="text-xl font-bold ">Botox</h2>
        <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>
      <button className="bg-primary font-bold text-white absolute bottom-0 right-4 px-6 py-2 hover:bg-black transition-all">Consulta</button>
    </article>
  );
};

export default Items;
