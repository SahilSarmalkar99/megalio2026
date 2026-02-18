import React, { useEffect, useState } from "react";
import bgImage from "../../assets/display/bg1.png";

const Countdown = () => {
  const targetDate = new Date("March 13, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-24 text-center text-red-500 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xs"></div>

      {/* Content */}
      <div className="relative z-10">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-widest">
          COUNTDOWN TO MEGALEIO 2026
        </h1>

        <p className="mb-10 text-lg text-red-300">
          GET READY FOR THE ULTIMATE TECH FEST!
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div
              key={index}
              className="bg-black/60 border-4 border-red-500 rounded-xl px-8 py-6 shadow-[0_0_25px_rgba(255,0,0,0.8)] min-w-[120px] backdrop-blur-md"
            >
              <div className="text-4xl font-bold">
                {String(timeLeft[unit]).padStart(2, "0")}
              </div>
              <div className="text-sm mt-2 uppercase tracking-wider">
                {unit}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Countdown;
