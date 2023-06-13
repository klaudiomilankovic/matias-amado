import { Facebook, Instagram, Linkedin } from "../icons/MySvgs";

const Footer = () => {
  return (
    <section className="p-14 bg-primary">
      <img src="/images/logo-footer.svg" alt="Logo Footer" className="mb-12" />

      <ul className="flex gap-4 ">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="svg-white">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="svg-white">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="svg-white">
            <Linkedin />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
