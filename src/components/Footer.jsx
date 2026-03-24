import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          {/* <h2 className="text-2xl font-bold text-blue-400">EaseCraft</h2> */}
          <NavLink
            to="/"
            className="text-2xl font-bold flex gap-2 items-center"
          >
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-[#9F62F2]">EaseCraft</span>
          </NavLink>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            EaseCraft builds innovative apps designed to make everyday life
            simpler, smarter, and more exciting through modern digital
            solutions.
          </p>

          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition"
            >
              <FaTwitter size={16} />
            </a>

            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:scale-110 transition"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Apps</li>
            <li className="hover:text-white cursor-pointer">Installation</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* App Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">App Categories</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Productivity</li>
            <li className="hover:text-white cursor-pointer">Lifestyle</li>
            <li className="hover:text-white cursor-pointer">Education</li>
            <li className="hover:text-white cursor-pointer">Health</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <FaEnvelope />
            support@easecraft.com
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Stay connected with EaseCraft and explore smart app experiences.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 py-5 text-center text-gray-500 text-sm px-4">
        © {new Date().getFullYear()} EaseCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
