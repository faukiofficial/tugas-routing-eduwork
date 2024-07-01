import { Link } from "react-router-dom";

const NavbarList = ({ link, text }) => {
  return (
    <li className="hover:text-blue-800 hover:bg-slate-200 p-3 font-bold">
      <Link to={link} className="p-5">
        {text}
      </Link>
    </li>
  );
};

export default NavbarList;
