import React, { useEffect, useRef } from "react";
import { timelineData } from "../../data/eventsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-30 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {timelineData.map((dayBlock, index) => (
          <div key={index} className="mb-24">
            {/* DAY HEADER */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-red-500 tracking-widest drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
                {dayBlock.day}
              </h2>
              <p className="text-gray-400 mt-2">{dayBlock.date}</p>
            </div>

            {/* EVENTS */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-600 via-purple-600 to-blue-600 transform -translate-x-1/2 hidden md:block"></div>

              {dayBlock.events.map((event, i) => (
                <div
                  key={i}
                  className={`timeline-item relative flex flex-col md:flex-row items-center mb-20 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* TIME */}
<div
  className={`md:w-1/2 flex items-center 
  ${i % 2 === 0 ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"}
  justify-center mb-4 md:mb-0`}
>
  <span className="text-2xl font-mono text-red-500 tracking-wider">
    [{event.time}]
  </span>
</div>


                  {/* CENTER DOT */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.9)] z-10"></div>

                  {/* EVENT BOX */}
                  <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8">
                    <div
                      className={`rounded-xl p-6 border-2 backdrop-blur-md transition-all duration-300 w-full max-w-md
      ${
        event.highlight
          ? "border-red-500 bg-red-900/30 shadow-[0_0_30px_rgba(255,0,0,0.7)]"
          : "border-blue-500 bg-blue-900/20 shadow-[0_0_25px_rgba(59,130,246,0.6)]"
      }`}
                    >
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Location: {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
