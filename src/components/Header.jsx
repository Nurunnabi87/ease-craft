import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
      <NavLink
        to="/"
        className="text-2xl font-bold flex gap-2 items-center justify-center"
      >
        <img src={logo} alt="logo" className="h-10 w-10" />
        <span className="text-[#9F62F2]">EaseCraft</span>
      </NavLink>

      <nav className="flex gap-6">
        <NavLink
          to="/"
          className="hover:text-[#9F62F2] hover:underline font-semibold"
        >
          Home
        </NavLink>
        <NavLink
          to="/apps"
          className="hover:text-[#9F62F2] hover:underline font-semibold"
        >
          Apps
        </NavLink>
        <NavLink
          to="/installation"
          className="hover:text-[#9F62F2] hover:underline font-semibold"
        >
          Installation
        </NavLink>
      </nav>

      <a
        href="https://github.com/yourgithub"
        target="_blank"
        className="bg-[#9F62F2] text-white font-semibold px-4 py-2 rounded flex items-center hover:bg-[#7A45B8] transition  "
      >
        <FaGithub />
        <span className="ml-2">Contribute</span>
      </a>
    </header>
  );
};

export default Header;
