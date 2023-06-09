import { Link } from "react-router-dom";

type Category = {
  category: number;
};

const Categories = ({ category }: Category) => {
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
        {category === 1 ? (
          <>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Rinoplastia
                </Link>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
          </>
        ) : category === 2 ? (
          <>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Lifting facial
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Blefaroplastia
                </Link>
              </li>
              <li>
                <Link to="/detalles/1" className="link-white">
                  Mentoplastia
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Categories;
