import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Social from "./Social";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white px-12 py-8">
      <div>
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <Social />
      </div>
    </div>
  );
};

export default Header;
