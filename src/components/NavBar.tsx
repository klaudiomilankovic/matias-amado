import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconDown } from "../icons/MySvgs";
import Categories from "./Categories";

const NavBar = () => {
  const [category, setCategory] = useState(1);
  const [menu, setMenu] = useState(false);

  const handleMenu = (num: number) => {
    setCategory(num);
    if (category === num) setMenu(!menu);
    else setMenu(!menu);
  };

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex items-center nav text-secondary font-bold">
          <li>
            <NavLink to="/" className="flex items-center">
              Home
            </NavLink>
          </li>
          <li>
            <button
              className="flex gap-2 items-center svg-secondary btn-categories"
              id="btn-1"
              onClick={() => handleMenu(1)}
            >
              Cirugías <IconDown />
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 items-center svg-secondary btn-categories"
              id="btn-2"
              onClick={() => handleMenu(2)}
            >
              Inyectables <IconDown />
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 items-center svg-secondary btn-categories"
              id="btn-3"
              onClick={() => handleMenu(3)}
            >
              Aparatología y Cosmiatría <IconDown />
            </button>
          </li>
          <li>
            <NavLink to="/contacto" className="flex items-center">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      {menu ? <Categories category={category} /> : null}
    </>
  );
};

export default NavBar;
