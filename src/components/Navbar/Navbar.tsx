// import { FaArrowRight } from "react-icons/fa";

// import { Link } from "react-scroll";
// import logo from "../../assets/images/main_logo.jpeg"

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 bg-white shadow-sm z-50">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


//         <div className="flex items-center gap-2">

//           <img src={logo} alt="logo" className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold" />



//           <h2 className="text-xl font-bold text-purple-700">
//             UIkey Services
//           </h2>

//         </div>
// <div className="flex items-center">

//         <ul className="flex items-center gap-10 ">

//           <li>
//             <Link
//               to="home"

//               className="cursor-pointer hover:text-violet-600 transition"
//               activeClass="text-violet-700 font-semibold"

//             >
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="services"
//               className="cursor-pointer hover:text-violet-600 transition"
//               activeClass="text-violet-700 font-semibold"

//             >
//               Services
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="about"
//               className="cursor-pointer hover:text-violet-600 transition"
//               activeClass="text-violet-700 font-semibold"

//             >
//               About
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="testimonials"
//               className="cursor-pointer hover:text-violet-600 transition"
//               activeClass="text-violet-700 font-semibold"
//             >
//               Testimonials
//             </Link>
//           </li>

//         </ul>

//         <Link to="testimonials">
//         <button
//           className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition ml-10"
//         >
//           Contact Us

//           <FaArrowRight />

//         </button>
//         </Link>
//         </div>

//       </nav>
//     </div>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/images/main_logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="flex items-center justify-between py-3">

          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Uikey Services"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
            />

            <h2 className="text-lg sm:text-xl font-bold text-purple-700">
              UIkey Services
            </h2>
          </div>


          <div className="hidden md:flex items-center">

            <ul className="flex items-center gap-6 lg:gap-10">

              <li>
                <Link
                  to="home"
                  onClick={closeMenu}
                  className="font-bold cursor-pointer hover:text-violet-600 transition"
                  activeClass="text-violet-700 font-semibold"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="services"
                  onClick={closeMenu}
                  className="font-bold cursor-pointer hover:text-violet-600 transition"
                  activeClass="text-violet-700 font-semibold"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="about"
                  onClick={closeMenu}
                  className="font-bold cursor-pointer hover:text-violet-600 transition"
                  activeClass="text-violet-700 font-semibold"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="testimonials"
                  onClick={closeMenu}
                  className="font-bold cursor-pointer hover:text-violet-600 transition"
                  activeClass="text-violet-700 font-semibold"
                >
                  Testimonials
                </Link>
              </li>

            </ul>

            <Link
              to="testimonials"
              className="ml-6 lg:ml-10"
              onClick={closeMenu}
            >
              <button
                className="font-bold bg-purple-700 hover:bg-purple-800 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-lg flex items-center gap-2 cursor-pointer transition whitespace-nowrap"
              >
                Contact Us
                <FaArrowRight />
              </button>
            </Link>

          </div>


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-purple-700 text-xl p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>


        <div
          className={`md:hidden overflow-hidden border-t border-gray-200 transition-all duration-500 ease-in-out
    ${menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
            }
            `} >

          <ul className="flex flex-col gap-4">

            <li>
              <Link
                to="home"
                onClick={closeMenu}
                className="font-bold block cursor-pointer hover:text-violet-600 transition py-1"
                activeClass="text-violet-700 font-semibold"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="services"
                onClick={closeMenu}
                className="font-bold block cursor-pointer hover:text-violet-600 transition py-1"
                activeClass="text-violet-700 font-semibold"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="about"
                onClick={closeMenu}
                className=" font-bold block cursor-pointer hover:text-violet-600 transition py-1"
                activeClass="text-violet-700 font-semibold"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="testimonials"
                onClick={closeMenu}
                className="font-bold block cursor-pointer hover:text-violet-600 transition py-1"
                activeClass="text-violet-700 font-semibold"
              >
                Testimonials
              </Link>
            </li>


            <li>
              <Link
                to="testimonials"
                onClick={closeMenu}
                className="inline-block"
              >
                <button
                  className="font-bold bg-purple-700 hover:bg-purple-800 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-lg flex items-center gap-2 cursor-pointer transition whitespace-nowrap"
                >
                  Contact Us
                  <FaArrowRight />
                </button>
              </Link>
            </li>

          </ul>

         </div>
      
      </nav>
    </header>
  );
};

export default Navbar;