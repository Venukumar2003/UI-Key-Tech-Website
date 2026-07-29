import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
            U
          </div>

          <h2 className="text-xl font-bold text-purple-700">
            UIkey Services
          </h2>

        </div>

        {/* Navigation Links */}

        <ul className="flex items-center gap-10 ">

          <li>
            <Link
              to="home"

              className="cursor-pointer hover:text-violet-600 transition"
              activeClass="text-violet-700 font-semibold"

            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="services"
              className="cursor-pointer hover:text-violet-600 transition"
              activeClass="text-violet-700 font-semibold"

            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="about"
              className="cursor-pointer hover:text-violet-600 transition"
              activeClass="text-violet-700 font-semibold"

            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="testimonials"
              className="cursor-pointer hover:text-violet-600 transition"
              activeClass="text-violet-700 font-semibold"
            >
              Testimonials
            </Link>
          </li>

        </ul>
        {/* Contact Button */}

        <Link to="testimonials">
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition"
        >
          Contact Us

          <FaArrowRight />

        </button>
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;