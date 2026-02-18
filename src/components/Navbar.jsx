import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import logo from "../assets/images/logo.webp";
import title from "../assets/title/Title.png";
import { NavLink, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const navLeft = ["Home", "Event", "Schedule"];
const navRight = ["MegaHack", "Team", "Contact Us"];

const navRoutes = {
  Home: "/",
  Event: "/event",
  Schedule: "/schedule",
  MegaHack: "/megahack",
  Team: "/team",
  "Contact Us": "/contactUs",
};

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

useGSAP(() => {
  if (!isHome) {
    // Kill only navbar triggers
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger?.id === "logo") t.kill();
    });

    gsap.set(["#logo", "#title"], { clearProps: "all" });
    return;
  }

  const ctx = gsap.context(() => {

    // 🔥 1️⃣ Reset transforms
    gsap.set(["#logo", "#title"], { clearProps: "all" });

    // 🔥 2️⃣ Scroll to top FIRST
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    // 🔥 3️⃣ Delay trigger creation slightly
    setTimeout(() => {

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {

        gsap.from("#logo", {
          x: window.innerWidth * 0.45,
          y: window.innerHeight * 0.45,
          scale: window.innerWidth / 200,
          scrollTrigger: {
            id: "logo", // important
            trigger: "#logo",
            start: "center 50%",
            scrub: 2,
          },
        });

        gsap.from("#title", {
          y: window.innerHeight * 0.8,
          scale: window.innerWidth / 1150,
          scrollTrigger: {
            trigger: "#logo",
            start: "center 50%",
            scrub: 2,
          },
        });

      });

    }, 50); // small delay is key

  });

  return () => ctx.revert();

}, [isHome]);



  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="fixed w-full top-0 z-50 bg-black text-gray-400 px-4 md:px-10 py-0 ">
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
            <img src={title} alt="" srcset="" className="h-15 md:h-20" />
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
          <div
            className="
            flex flex-col md:flex-row
            md:items-center md:justify-evenly
            gap-6 md:gap-10
            mt-6 md:mt-0
            text-lg font-bold px-4 md:px-0 pb-4 md:pb-0
          "
          >
            {/* LEFT NAV */}
            <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
              {navLeft.map((nav, i) => (
                <NavLink
                  key={i}
                  to={navRoutes[nav]}
                  className="hover:text-white cursor-pointer"
                >
                  {nav}
                </NavLink>
              ))}
            </ul>

            {/* RIGHT NAV */}
            <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
              {navRight.map((nav, i) => (
                <NavLink
                  key={i}
                  to={navRoutes[nav]}
                  className="hover:text-white cursor-pointer"
                >
                  {nav}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
