import { Link } from "react-router-dom";
import NavbarList from "../elements/NavbarList";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 bg-white shadow-md sticky top-0">
      <div>
        <Link className="font-black text-2xl" to="/">
          Logo
        </Link>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-5">
          <NavbarList link="/" text="Home" />
          <NavbarList link="/about" text="About" />
          <NavbarList link="/contact" text="Contact Us" />
        </ul>
      </div>
      <div className="flex gap-3">
        <a
          href="/login"
          className="bg-blue-500 text-white px-5 py-1 text-xl rounded-lg hover:bg-blue-600"
        >
          Login
        </a>
        <a
          href="/signup"
          className="bg-blue-500 text-white px-5 py-1 text-xl rounded-lg hover:bg-blue-600"
        >
          SignUp
        </a>
      </div>
    </div>
  );
};

export default Navbar;
