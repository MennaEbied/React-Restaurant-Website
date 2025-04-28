import { Link } from "react-router-dom";
import icon from "../assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 bg-amber-50 z-50 py-4 px-6 flex justify-between items-center w-full font-montserrat">
      {/* Logo section */}
      <div className="flex items-center">
        <p className="font-semibold text-amber-800 text-xl md:ml-10">Samurai</p>
        <img src={icon} className="h-14 w-14" alt="Sushi icon" />
      </div>

      {/* Desktop navigation - hidden on mobile */}
      <div className="hidden md:flex mx-auto justify-between items-center gap-8 font-medium">
        <Link to="/" className="text-amber-800 hover:text-amber-700">
          Home
        </Link>
        <Link to="/menu" className="text-gray-800 hover:text-gray-600">
          Menu
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-gray-600">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-800 hover:text-gray-600">
          Contact Us
        </Link>
      </div>

      {/* Desktop buttons - hidden on mobile */}
      <div className="hidden md:flex gap-2">
        <button className="rounded-3xl bg-amber-800 w-20 h-10 text-white cursor-pointer hover:bg-amber-700  transition-colors duration-300">
          Sign In
        </button>
        <button className="rounded-3xl bg-white border border-amber-800 w-20 h-10 cursor-pointer hover:bg-amber-50 transition">
          Sign Up
        </button>
      </div>

      {/* Mobile menu button - shown only on mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X color="#993605" size={24} />
        ) : (
          <Menu color="#993605" size={24} />
        )}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="absolute top-24 right-0 left-0 bg-amber-50 shadow-lg md:hidden z-50 border-t border-amber-100">
          <div className="flex flex-col items-center py-4 space-y-6">
            <Link
              to="/"
              className="text-amber-800 hover:text-amber-600 text-lg w-full text-center py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-gray-800 hover:text-gray-600 text-lg w-full text-center py-2"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 text-lg w-full text-center py-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-gray-600 text-lg w-full text-center py-2"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <div className="flex gap-4 pt-2">
              <button className="rounded-3xl bg-amber-800 w-20 h-10 text-white cursor-pointer hover:bg-amber-700 transition">
                Sign In
              </button>
              <button className="rounded-3xl bg-white border border-amber-800 w-20 h-10 cursor-pointer hover:bg-amber-50 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
