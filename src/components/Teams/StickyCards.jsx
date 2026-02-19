import React, { useEffect, useRef } from "react";
import teamData from "../../data/teamData";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll(".card");

    const totalCards = cards.length;
    const segmentSize = 1 / totalCards;

    const cardOffset = 5;
    const cardScaleStep = 0.075;

    // =========================
    // LENIS
    // =========================
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // =========================
    // INITIAL CARD SETUP
    // =========================
    cards.forEach((card, i) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50 + i * cardOffset,
        scale: 1 - i * cardScaleStep,
      });
    });

    // =========================
    // SCROLLTRIGGER
    // =========================
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * 8}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        const activeCard = Math.min(
          Math.floor(progress / segmentSize),
          totalCards - 1
        );

        const segProgress =
          (progress - activeCard * segmentSize) / segmentSize;

        cards.forEach((card, i) => {
          if (i < activeCard) {
            gsap.set(card, {
              yPercent: -250,
              rotationX: 35,
            });
          } else if (i === activeCard) {
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(-50, -200, segProgress),
              rotationX: gsap.utils.interpolate(0, 35, segProgress),
              scale: 1,
            });
          } else {
            const behindIndex = i - activeCard;
            const currentYOffset =
              (behindIndex - segProgress) * cardOffset;

            const currentScale =
              1 - (behindIndex - segProgress) * cardScaleStep;

            gsap.set(card, {
              yPercent: -50 + currentYOffset,
              rotationX: 0,
              scale: currentScale,
            });
          }
        });
      },
    });

    return () => {
      trigger.kill();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky-cards relative w-full h-[100svh] bg-black overflow-hidden perspective-[850px]"
    >
      {teamData.map((member, index) => (
        <div
          key={member.id}
          className="card absolute top-1/2 left-1/2 w-[65%] h-[60%]
          flex gap-6 p-10 rounded-2xl
          bg-gradient-to-br from-red-900 via-black to-red-950
          shadow-[0_0_40px_rgba(255,0,0,0.4)]
          text-white"
          style={{ zIndex: teamData.length - index }}
        >
          {/* LEFT */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="uppercase text-sm tracking-widest text-red-400">
                {member.role}
              </p>
              <h1 className="text-3xl font-extrabold uppercase mt-2">
                {member.name}
              </h1>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {member.description}
            </p>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-2xl hover:text-red-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex-1 rounded-xl overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default StickyCards;
