import React, { useEffect, useState } from "react";
import { useReveal } from "../../hook/reveal";

const Countdown = () => {
  // 🎯 SET YOUR FINAL DATE HERE
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

  // useReveal(".reveal")

  return (
    <section className="reveal relative py-20 bg-black text-center text-red-500">

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-widest">
        COUNTDOWN TO MEGALEIO 2026
      </h1>

      <p className="mb-10 text-lg">
        GET READY FOR THE ULTIMATE MINECRAFT-THEMED TECH FEST!
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div
            key={index}
            className="bg-black border-4 border-red-500 rounded-xl px-8 py-6 shadow-[0_0_25px_rgba(255,0,0,0.8)] min-w-[120px]"
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
    </section>
  );
};

export default Countdown;
