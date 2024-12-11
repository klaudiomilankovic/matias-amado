import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

type Props = {
  id: number;
  title: string;
};

type PropsItems = {
  data: { id: number; category: number; title: string; filter: any }[];
  loading: boolean;
};

const CategoriesItems = ({ id, title }: Props) => {
  const { data } = useFetch(`/trabajos`) as PropsItems;

  return (
    <ul className="[&>li]:mb-1 mb-4">
      <li>
        <span className="font-bold">{title}</span>
      </li>
      {data &&
        data
          .filter((item) => item.category === id)
          .map((item) => (
            <li key={item.id}>
              <Link to={`/detalles/${item.id}`} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default CategoriesItems;
