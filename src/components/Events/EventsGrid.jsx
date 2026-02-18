import React, { useState } from "react";
import { eventsGridData } from "../../data/eventsGridData";
import { useReveal } from "../../hook/reveal";
import bg from "../../assets/display/bg2.png";

const EventsGrid = () => {
  useReveal(".reveal");

  const [search, setSearch] = useState("");

  const filteredEvents = eventsGridData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section
      className="relative py-24 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-6xl font-extrabold text-red-500 tracking-widest drop-shadow-[0_0_20px_rgba(255,0,0,0.9)]">
            THIS YEAR'S EVENTS
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            This year’s event will feature a variety of exciting competitions
            across different domains. Join us and showcase your skills!
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex justify-center mb-16 reveal">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-6 py-3 rounded-lg bg-white/90 text-black font-semibold outline-none shadow-lg focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="reveal relative group rounded-[28px] overflow-hidden border-2 border-blue-500 
             shadow-[0_0_25px_rgba(59,130,246,0.6)] 
             w-full max-w-[380px] mx-auto"
            >
              {/* CARD HEIGHT CONTROL */}
              <div className="relative h-[520px]">
                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/65"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-8 text-center">
                  {/* Top Text */}
                  <div>
                    <h3 className="text-3xl font-extrabold text-white tracking-wider mb-6">
                      {event.title.toUpperCase()}
                    </h3>

                    {event.description && (
                      <p className="text-gray-200 text-[20px] font-bold leading-[1.05]">
                        {event.description}
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-4 mt-10">
                    {/* REGISTER */}
                    <a
                      href={event.registerLink}
                      className="
      w-full bg-green-600 py-3 rounded-lg font-bold 
      shadow-[0_0_15px_rgba(34,197,94,0.8)]
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(34,197,94,1)]
      active:scale-95
    "
                    >
                      REGISTER NOW
                    </a>

                    {/* DETAILS */}
                    <a
                      href={event.detailsLink}
                      className="
      w-full bg-yellow-500 py-3 rounded-lg font-bold text-black
      shadow-[0_0_15px_rgba(234,179,8,0.8)]
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(234,179,8,1)]
      active:scale-95
    "
                    >
                      VIEW DETAILS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
