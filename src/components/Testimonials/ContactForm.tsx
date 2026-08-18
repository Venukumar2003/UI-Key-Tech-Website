import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState } from "react";


const ContactForm = () => {
const [email,setEmail] = useState("");
const [name,setName] = useState("");
const [message,setMessage] = useState("");



  return (
    <div id= "contact" className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 lg:p-8 m-10">


      <div className="flex justify-between items-start">

        <div>
          <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-xs font-semibold uppercase">
            Contact Us
          </span>

          <h2 className="text-2xl font-bold mt-4">
            Let's Start Your Next Project
          </h2>
        </div>

        <div className="flex gap-3">

          <button className="w-10 h-10 rounded-full bg-violet-50 text-violet-700 flex items-center justify-center hover:bg-violet-700 hover:text-white cursor-pointer transition">
            <FaArrowLeft />
          </button>

          <button className="w-10 h-10 rounded-full bg-violet-50 text-violet-700 flex items-center justify-center hover:bg-violet-700 hover:text-white cursor-pointer transition">
            <FaArrowRight />
          </button>

        </div>

      </div>



      <form className="mt-5">



        <div className="grid md:grid-cols-2 gap-3">

          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={(e)=>setName(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-violet-500"
          />

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={(e)=>setEmail(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-violet-500"
          />

        </div>



        <textarea
          rows={4}
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="w-full mt-3 border border-gray-200 rounded-xl px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-violet-500 overflow-auto"
        />

    
        <button
          className="w-full mt-4 bg-gradient-to-r from-violet-700 to-purple-600 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition cursor-pointer"
        >
          Send Message →
        </button>

      </form>

    </div>
  );
};

export default ContactForm;