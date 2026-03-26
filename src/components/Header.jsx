// import { FaGithub } from "react-icons/fa";
// import { NavLink } from "react-router";
// import logo from "../assets/logo.png";

// const Header = () => {
//   const navLinkStyle = ({ isActive }) =>
//     isActive
//       ? "text-[#9F62F2] font-semibold border-b-2 border-[#9F62F2] pb-1"
//       : "text-gray-700 hover:text-[#9F62F2] transition";
//   return (
//     <header className="shadow-md bg-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <NavLink
//           to="/"
//           className="text-2xl font-bold flex gap-2 items-center justify-center"
//         >
//           <img src={logo} alt="logo" className="h-10 w-10" />
//           <span className="text-[#9F62F2]">EaseCraft</span>
//         </NavLink>

//         <nav className="flex gap-6">
//           <NavLink to="/" className={navLinkStyle}>
//             Home
//           </NavLink>
//           <NavLink to="/apps" className={navLinkStyle}>
//             Apps
//           </NavLink>
//           <NavLink to="/installation" className={navLinkStyle}>
//             Installation
//           </NavLink>
//         </nav>

//         <a
//           href="https://github.com/yourgithub"
//           target="_blank"
//           className="bg-[#9F62F2] text-white font-semibold px-4 py-2 rounded flex items-center hover:bg-[#7A45B8] transition  "
//         >
//           <FaGithub />
//           <span className="ml-2">Contribute</span>
//         </a>
//         {/* Mobile Menu */}
//         <div className="dropdown dropdown-end md:hidden">
//           <div tabIndex={0} role="button" className="btn btn-ghost">
//             ☰
//           </div>

//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
//           >
//             <li>
//               <NavLink to="/" className={navLinkStyle}>
//                 Home
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/apps" className={navLinkStyle}>
//                 Apps
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/installation" className={navLinkStyle}>
//                 Installation
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#9F62F2] font-semibold border-b-2 border-[#9F62F2] pb-1"
      : "text-gray-700 hover:text-[#9F62F2] transition";

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <img src={logo} alt="logo" className="h-10 w-10" />
          <span className="text-[#9F62F2]">EaseCraft</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg">

          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/apps" className={navLinkStyle}>
            Apps
          </NavLink>

          <NavLink to="/installation" className={navLinkStyle}>
            Installation
          </NavLink>

        </nav>

        {/* Desktop Contribution Button */}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex bg-[#9F62F2] text-white font-semibold px-4 py-2 rounded-xl items-center hover:bg-[#7A45B8] transition"
        >
          <FaGithub />
          <span className="ml-2">Contribute</span>
        </a>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-2xl"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-56 space-y-2"
          >
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/apps" className={navLinkStyle}>
                Apps
              </NavLink>
            </li>

            <li>
              <NavLink to="/installation" className={navLinkStyle}>
                Installation
              </NavLink>
            </li>

            <li>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noreferrer"
                className="bg-[#9F62F2] text-white px-3 py-2 rounded-lg flex items-center justify-center"
              >
                <FaGithub />
                <span className="ml-2">Contribute</span>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;