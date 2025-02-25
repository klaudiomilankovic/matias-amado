import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";

type Props = {
  id: number;
  image: string;
  category: string;
  title: string;
  text: string;
};

const Items = ({ id, image, category, title, text }: Props) => {
  const url = import.meta.env.VITE_API_URL;

  return (
    <article className="item border border-black relative">
      <div className="item-img">
        <Link to={`/detalles/${id}`}>
          <div className="aspect-video object-cover hover:opacity-80 transition-opacity">
            <ImageComponent src={url + image} alt={title} />
          </div>
        </Link>
      </div>
      <div className="item-txt p-4 pb-20">
        <h3 className="text-sm text-black">{category}</h3>
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
      <Link
        to={`/detalles/${id}`}
        className="bg-primary font-bold text-white absolute bottom-0 right-4 px-6 py-3 hover:bg-black transition-colors"
      >
        Consulta
      </Link>
    </article>
  );
};

export default Items;
