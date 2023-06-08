import { NavLink } from "react-router-dom";
import { IconDown } from "./MySvgs";

const NavBar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center nav">
        <li>
          <NavLink to="/" className="flex items-center">
            Home
          </NavLink>
        </li>
        <li>
          <a href="#" className="flex gap-2 items-center svg-secondary">
            Quirúrgico <IconDown />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 items-center svg-secondary">
            No quirurgico <IconDown />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 items-center svg-secondary">
            Cosmética <IconDown />
          </a>
        </li>
        <li>
          <NavLink to="/contacto" className="flex items-center">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
