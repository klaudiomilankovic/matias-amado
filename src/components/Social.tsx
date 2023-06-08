import { Facebook, Instagram, Linkedin } from "./MySvgs";

const Social = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="svg-primary">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="svg-primary">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="svg-primary">
          <Linkedin />
        </a>
      </li>
    </ul>
  );
};

export default Social;
