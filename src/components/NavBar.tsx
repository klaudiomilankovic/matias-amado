import { NavLink } from "react-router-dom";
import { IconDown } from "./MySvgs";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-12">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a href="#" className="flex gap-2 items-center">
            Quirúrgico <IconDown />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 items-center">
            No quirurgico <IconDown />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 items-center">
            Cosmética <IconDown />
          </a>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
