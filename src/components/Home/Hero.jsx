import React from "react";
import img from "../../assets/display/dustin.png";
import { useReveal } from "../../hook/reveal";

const Hero = () => {
    useReveal(".reveal")
  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="reveal space-y-8">

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider leading-tight text-red-500 drop-shadow-[0_0_25px_rgba(220,38,38,0.9)]">
            ENTER THE <br />
            <span className="text-white">UPSIDE DOWN</span>
          </h1>

          <div className="bg-black/60 border border-red-800 p-8 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.5)] backdrop-blur-sm">
            <p className="text-lg text-red-300 leading-relaxed">
              A national-level immersive experience where mystery meets
              innovation. Step beyond reality, explore hidden dimensions,
              and uncover secrets that blur the line between science and
              the supernatural.
            </p>
          </div>

          <button className="relative px-10 py-4 bg-red-700 hover:bg-red-800 transition-all duration-300 rounded-xl text-black font-bold tracking-wide shadow-[0_0_35px_rgba(220,38,38,0.9)] hover:shadow-[0_0_60px_rgba(220,38,38,1)]">
            EXPLORE THE UNKNOWN
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="reveal relative flex justify-center">

          {/* Glow Behind Image */}
          <div className="absolute w-[80%] h-[80%] bg-red-600 blur-3xl opacity-40 rounded-full"></div>

          <div className="relative rounded-3xl overflow-hidden border border-red-700 shadow-[0_0_60px_rgba(220,38,38,0.8)] transform hover:scale-105 transition duration-500">
            <img
              src={img}
              alt="Stranger Things"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
