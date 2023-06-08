import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Quirúrgico",
      link: "#",
    },
    {
      name: "No quirurgico",
      link: "#",
    },
    {
      name: "Cosmética",
      link: "#",
    },
    {
      name: "Contacto",
      link: "/contacto",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-12 font-medium">
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
