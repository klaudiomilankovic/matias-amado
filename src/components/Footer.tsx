import { Instagram } from "../icons/MySvgs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="px-6 lg:px-14 py-14 bg-primary flex flex-col gap-y-6 items-start">
      <img src="/images/logo-footer.svg" alt="Logo Footer" />

      <ul className="flex flex-col gap-y-1 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Quirúrgico</li>
        <li>No quirurgico</li>
        <li>Cosmética</li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>

      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.instagram.com/aesthetic_medicine_center/"
            target="_blank"
            rel="noreferrer"
            className="svg-white text-sm"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
