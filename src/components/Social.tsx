import { Facebook, Instagram, Linkedin } from "../icons/MySvgs";

const Social = () => {
  const OpenMenu = () => {
    document.querySelector("#nav-menu")?.classList.toggle("active");

    const navMobile = document.querySelector(".nav-mobile");
    navMobile?.classList.toggle("hidden");
  };

  return (
    <div className="flex gap-6">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
          >
            <Linkedin />
          </a>
        </li>
      </ul>

      <div id="nav-menu" onClick={OpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Social;
