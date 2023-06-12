import CategoriesItems from "./CategoriesItems";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

type Category = {
  category: number;
};

type Props = {
  data: { id: number; section: number; title: string; filter: any }[];
  loading: boolean;
};

const Categories = ({ category }: Category) => {
  const { data, loading } = useFetch(`/categorias`) as Props;

  const closeCategories = () => {
    const categories = document.querySelectorAll(".categories");
    const btns = document.querySelectorAll(".btn-categories");
    categories.forEach((category) => {
      category.classList.add("hidden");
    });
    btns.forEach((btn) => {
      btn.classList.remove("bg-primary");
      btn.classList.remove("text-white");
    });
  };

  return (
    <section className="fixed left-0 categories w-full px-8 hidden bg-black h-screen bg-opacity-30" id={`categories-${category}`} onClick={closeCategories}>
      <div className="bg-primary px-12 pt-8 pb-12 text-white flex justify-evenly gap-20 container m-auto">
        {loading ? <Loader /> : data && data.filter((item) => item.section === category).map((item) => <CategoriesItems key={item.id} id={item.id} title={item.title} />)}
      </div>
    </section>
  );
};

export default Categories;
