import Items from "./Items";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

type Props = {
  data: {
    id: number;
    image: string;
    category_name: string;
    title: string;
    text: string;
    home: number;
    filter: any;
  };
  loading: boolean;
};

const Works = ({ title }: { title: string }) => {
  const { data, loading } = useFetch(`/trabajos`) as Props;

  return (
    <section className="px-6 lg:px-14 py-6 pb-14 lg:py-12">
      <h1 className="text-4xl lg:text-5xl font-bold mb-12 lg:mb-16 text-primary text-center">
        {title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-8">
        {loading ? (
          <Loader />
        ) : (
          data &&
          data
            .filter((item) => item.home === 1)
            .map((item) => (
              <Items
                key={item.id}
                id={item.id}
                image={item.image}
                category={item.category_name}
                title={item.title}
                text={item.text}
              />
            ))
        )}
      </div>
    </section>
  );
};

export default Works;
