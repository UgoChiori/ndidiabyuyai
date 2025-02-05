import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffff]  text-black  py-4 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
         <img src="/images/logo2.png" alt="logo" className="h-27 w-27" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-2xl">
          <Link to="/" className="hover:text-gray-500 dark:hover:text-gray-400 ">Home</Link>
          <Link to="/menu" className="hover:text-gray-500 dark:hover:text-gray-400">Menu</Link>
          <Link to="/reservations" className="hover:text-gray-500 dark:hover:text-gray-400">Reservations</Link>
          <Link to="/reviews" className="hover:text-gray-500 dark:hover:text-gray-400">Reviews</Link>
          <Link to="/contact" className="hover:text-gray-500 dark:hover:text-gray-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          {/* <Link to="/about" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link> */}
          <Link to="/menu" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/reservations" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={() => setIsOpen(false)}>Reservations</Link>
          <Link to="/reviews" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link to="/contact" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
