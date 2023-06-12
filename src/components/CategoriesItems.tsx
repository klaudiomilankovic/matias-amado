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

  console.log(data);

  return (
    <ul className="[&>li]:mb-2">
      <li>
        <span className="font-bold">{title}</span>
      </li>
      {data &&
        data
          .filter((item) => item.category === id)
          .map((item) => (
            <li key={item.id}>
              <Link to={`/detalles/${item.id}`} className="link-white">
                {item.title}
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default CategoriesItems;
