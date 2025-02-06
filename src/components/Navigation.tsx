import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`w-full py-4 px-6 md:px-10 transition-all duration-300 ${
        isHomePage
          ? "absolute top-0 left-0 z-20 text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center relative z-10">
        <Link to="/" className="text-2xl font-bold text-white">
          <img src="/images/logo2.png" alt="logo" className="h-27 w-27" />
        </Link>

        <div className="hidden md:flex space-x-6 text-2xl font-[200]">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/menu" className="hover:text-gray-300">
            Menu
          </Link>
          <Link to="/reservations" className="hover:text-gray-300">
            Reservations
          </Link>
          <Link to="/reviews" className="hover:text-gray-300">
            Reviews
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-gray-100 p-4 absolute inset-x-0 top-30 z-10 shadow-lg rounded-lg text-black">
          <Link
            to="/"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/reservations"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Reservations
          </Link>
          <Link
            to="/reviews"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
