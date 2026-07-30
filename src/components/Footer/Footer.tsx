import { Link } from "react-scroll" ;

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


import { services } from "./FooterData";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6 py-2">

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold">
              UIKey Services
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              We provide TDL development,automation,software solutions,websites,mobile apps, and AI-powered digital tools for businesses.
            </p>

            <div className="flex gap-3 mt-6">

              <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center cursor-pointer hover:bg-violet-600">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center cursor-pointer hover:bg-violet-600">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center cursor-pointer hover:bg-violet-600">
                <FaLinkedinIn />
              </div>

              <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center cursor-pointer hover:bg-violet-600">
                <FaWhatsapp />
              </div>

            </div>

          </div>


          <div>

            <h3 className="font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="home"
                  className="cursor-pointer text-gray-400 hover:text-violet-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="services"
                  className="cursor-pointer text-gray-400 hover:text-violet-500 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="about"
                  className="cursor-pointer text-gray-400 hover:text-violet-500 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="testimonials"
                  className="cursor-pointer text-gray-400 hover:text-violet-500 transition"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  to="testimonials"
                  className="cursor-pointer text-gray-400 hover:text-violet-500 transition"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          <div>

            <h3 className="font-semibold text-xl mb-5">
              Services
            </h3>

            <ul className="space-y-3">

              {services.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-violet-400" />
                <span className="text-gray-400">
                  +91 8551016775
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-violet-400" />
                <span className="text-gray-400">
                  uikeyservices@gmail.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-violet-400 mt-1" />
                <span className="text-gray-400">
                  Betul, Madhya Pradesh (India)
                </span>
              </div>

            </div>

          </div>

        </div>


        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2024 UIKey Services. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;