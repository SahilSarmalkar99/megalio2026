import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import logo from "./assets/images/logo.webp";

gsap.registerPlugin(ScrollTrigger);

const navLeft = ["Home", "Event", "Schedule"];
const navRight = ["MegaHack", "Team", "Contact Us"];

const App = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from("#logo", {
        x: () => window.innerWidth *0.45 ,
        y: ()=> window.innerWidth *0.2,
        scale: ()=>window.innerWidth / 200,
        scrollTrigger: {
          trigger: "#logo",
          scrub: 2,
          start: "center 50%",
        },
      });

      gsap.from("#title", {
        y: ()=> window.innerWidth *0.36,
        x: () => window.innerWidth * -0 ,
        scrollTrigger: {
          trigger: "#logo",
          scrub: 2,
          start: "center 50%",
        },
      });
    });
    
    mm.add("(max-width: 767px)", () => {
      gsap.from("#logo", {
        x: () => window.innerWidth *0.45 ,
        y: ()=> window.innerWidth *0.40,
        scale: ()=>window.innerWidth / 70,
        scrollTrigger: {
          trigger: "#logo",
          scrub: 1,
          start: "center 40%",
          markers :true
        },
      });

      gsap.from("#title", {
        x: () => window.innerWidth *0,
        y: ()=> window.innerWidth *0.74,
        scrollTrigger: {
          trigger: "#logo",
          scrub: 2,
          start: "center 40%",
        },
      });
    });
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black text-gray-400 px-4 md:px-10 py-4 relative">
        {/* TOP ROW — FIXED LAYOUT */}
        <div className="grid grid-cols-3 items-center">
          {/* LOGO */}
          <div id="logo" className="justify-self-start">
            <img src={logo} alt="logo" className="h-10 md:h-14" />
          </div>

          {/* TITLE */}
          <div
            id="title"
            className="justify-self-center flex flex-col items-center text-red-600 font-bold"
          >
            <span className="text-lg md:text-2xl tracking-[0.2em]">
              STRANGER
            </span>
            <span className="text-lg md:text-2xl tracking-[0.2em] -mt-1">
              THINGS
            </span>
          </div>

          {/* TOGGLE */}
          <button
            className="md:hidden justify-self-end text-2xl text-gray-300"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* NAV MENU — ISOLATED FROM GSAP */}
        <div
          className={`
            absolute left-0 top-full w-full bg-black
            overflow-hidden transition-all duration-500 ease-in-out
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            md:static md:max-h-none md:opacity-100
          `}
        >
          <div className="
            flex flex-col md:flex-row
            md:items-center md:justify-evenly
            gap-6 md:gap-10
            mt-6 md:mt-0
            text-lg font-bold px-4 md:px-0 pb-4 md:pb-0
          ">
            {/* LEFT NAV */}
            <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
              {navLeft.map((nav, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {nav}
                </li>
              ))}
            </ul>

            {/* RIGHT NAV */}
            <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
              {navRight.map((nav, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {nav}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* PAGE SECTIONS */}
      <div className="bg-zinc-800 w-full h-screen"></div>
      <div className="bg-white w-full h-screen"></div>
    </div>
  );
};

export default App;
