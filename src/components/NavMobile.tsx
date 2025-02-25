import { NavLink, Link } from "react-router-dom";
import { IconDown } from "../icons/MySvgs";
import useFetch from "../hooks/useFetch";

const NavMobile = () => {
  const { data } = useFetch(`/trabajos`);
  const { data: categories } = useFetch(`/categorias`);

  const handleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const menus = document.querySelectorAll(".nav-mobile-submenu");
    menus.forEach((menu) => {
      menu.classList.add("hidden");
    });
    const menu = e.currentTarget.dataset.menu;
    const submenu = document.querySelector(`#submenu-${menu}`);
    submenu?.classList.toggle("hidden");
  };

  return (
    <div className="nav-mobile fade-in bg-primary-opacity backdrop-blur px-6 py-6 pb-12 h-screen w-full hidden overflow-y-auto">
      <ul className="flex flex-col gap-y-3 [&>li>a]:text-white [&>li>button]:text-white">
        <li>
          <NavLink to="/" className="font-bold">
            Home
          </NavLink>
        </li>
        <li>
          <button
            className="font-bold flex items-center gap-2"
            data-menu="1"
            onClick={handleMenu}
          >
            Cirugías <IconDown />
          </button>
          <ul className="hidden mt-1" id="submenu-1">
            {categories &&
              categories
                .filter((category) => category.section === 1)
                .map((category) => (
                  <li key={category.id}>
                    <span className="font-bold text-white">
                      {category.title}
                    </span>
                    <ul className="pl-4">
                      {data &&
                        data
                          .filter((item) => item.category === category.section)
                          .map((item) => (
                            <li key={item.id}>
                              <Link
                                to={`/detalles/${item.id}`}
                                className="text-white "
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </li>
                ))}
          </ul>
        </li>
        <li>
          <button
            className="font-bold flex items-center gap-2 "
            data-menu="2"
            onClick={handleMenu}
          >
            Inyectables <IconDown />
          </button>
          <ul className="hidden mt-1" id="submenu-2">
            {categories &&
              categories
                .filter((category) => category.section === 2)
                .map((category) => (
                  <li key={category.id}>
                    <span className="font-bold text-white">
                      {category.title}
                    </span>
                    <ul className="pl-4">
                      {data &&
                        data
                          .filter((item) => item.category === category.section)
                          .map((item) => (
                            <li key={item.id}>
                              <Link
                                to={`/detalles/${item.id}`}
                                className="text-white "
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </li>
                ))}
          </ul>
        </li>
        <li>
          <button
            className="font-bold flex items-center gap-2 "
            data-menu="3"
            onClick={handleMenu}
          >
            Aparatología y Cosmiatría <IconDown />
          </button>
          <ul className="hidden mt-1" id="submenu-3">
            {categories &&
              categories
                .filter((category) => category.section === 3)
                .map((category) => (
                  <li key={category.id}>
                    <span className="font-bold text-white">
                      {category.title}
                    </span>
                    <ul className="pl-4">
                      {data &&
                        data
                          .filter((item) => item.category === category.section)
                          .map((item) => (
                            <li key={item.id}>
                              <Link
                                to={`/detalles/${item.id}`}
                                className="text-white "
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </li>
                ))}
          </ul>
        </li>
        <li>
          <NavLink to="/contacto" className="font-bold">
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
