import { NavLink, Link } from "react-router-dom";
import { IconDown } from "./MySvgs";
import useFetch from "../hooks/useFetch";

const NavMobile = () => {
  const { data } = useFetch(`/trabajos`);

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
    <div className="nav-mobile bg-primary px-14 py-14 h-screen w-full pt-14 hidden">
      <ul className="[&>li]:mb-4 [&>li>a]:text-white [&>li>button]:text-white">
        <li>
          <NavLink to="/" className="font-bold">
            Home
          </NavLink>
        </li>
        <li>
          <button className="font-bold flex items-center gap-2" data-menu="1" onClick={handleMenu}>
            Quirúrgico <IconDown />
          </button>

          <ul className="nav-mobile-submenu hidden mt-1" id="submenu-1">
            {data &&
              data
                .filter((item) => item.category === 1)
                .map((item) => (
                  <li key={item.id}>
                    <Link to={`/detalles/${item.id}`} className="link-white">
                      {item.title}
                    </Link>
                  </li>
                ))}
          </ul>
        </li>
        <li>
          <button className="font-bold flex items-center gap-2 " data-menu="2" onClick={handleMenu}>
            No quirúrgico <IconDown />
          </button>

          <ul className="nav-mobile-submenu hidden mt-1" id="submenu-2">
            {data &&
              data
                .filter((item) => item.category === 2)
                .map((item) => (
                  <li key={item.id}>
                    <Link to={`/detalles/${item.id}`} className="link-white">
                      {item.title}
                    </Link>
                  </li>
                ))}
          </ul>
        </li>
        <li>
          <button className="font-bold flex items-center gap-2 " data-menu="3" onClick={handleMenu}>
            Cosmetica <IconDown />
          </button>

          <ul className="nav-mobile-submenu hidden mt-1" id="submenu-3">
            {data &&
              data
                .filter((item) => item.category === 3)
                .map((item) => (
                  <li key={item.id}>
                    <Link to={`/detalles/${item.id}`} className="link-white">
                      {item.title}
                    </Link>
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
