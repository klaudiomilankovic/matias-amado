import { Instagram } from "../icons/MySvgs";

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
            href="https://www.instagram.com/aesthetic_medicine_center/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black text-xl"
          >
            <Instagram />
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
