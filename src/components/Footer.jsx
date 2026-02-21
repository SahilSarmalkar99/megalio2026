import React from "react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 border-t border-red-900 overflow-hidden">

      {/* Dark Red Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#120000] to-black opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-red-600 stranger-title">
            MEGALIO
          </h2>

          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            A National Level Intercollegiate Technical Event where innovation
            meets excellence.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h3 className="text-xl text-red-500 mb-6 stranger-heading">
            CONTACT US
          </h3>

          <div className="space-y-3 text-sm">
            <p><span className="text-red-600">Faculty:</span></p>
            <p>Mr. Swapnil Malipatil</p>
            <p>Mrs. Vishakha Rane</p>

            <p className="mt-4"><span className="text-red-600">Students:</span></p>
            <p>Mr. Devang Vartak</p>
            <p>Mr. Omkar Shinde</p>
            <p>Ms. Gracy Yadav</p>
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div>
          <h3 className="text-xl text-red-500 mb-6 stranger-heading">
            FOLLOW US
          </h3>

          <div className="flex gap-6">
            <a href="#" className="stranger-social">
              <FaInstagram size={20} />
            </a>

            <a href="#" className="stranger-social">
              <FaYoutube size={20} />
            </a>

            <a href="#" className="stranger-social">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        {/* FORM SECTION */}
        <div>
          <h3 className="text-xl text-red-500 mb-6 stranger-heading">
            SEND A MESSAGE
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-red-700 px-4 py-2 rounded-md focus:outline-none focus:border-red-500 focus:shadow-red-500/40 focus:shadow-md"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-black border border-red-700 px-4 py-2 rounded-md focus:outline-none focus:border-red-500 focus:shadow-red-500/40 focus:shadow-md"
            />

            <textarea
              rows="3"
              placeholder="Your Query..."
              className="w-full bg-black border border-red-700 px-4 py-2 rounded-md focus:outline-none focus:border-red-500 focus:shadow-red-500/40 focus:shadow-md"
            ></textarea>

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-md transition duration-300 shadow-lg shadow-red-800/40 hover:shadow-red-600/60"
            >
              SUBMIT
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="relative z-10 border-t border-red-900 text-center py-6 text-xs text-gray-500">
        © 2026 Megalio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;