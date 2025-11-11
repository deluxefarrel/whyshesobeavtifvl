import React, { useState, useEffect } from "react";

export default function About() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container mx-auto">
      <div
        id="read-me"
        className="p-6 mt-15"
        style={{ transform: `translateY(${offSetY * 0.1}px)` }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold font-sec tracking-wide text-[#d8caaa] ">
          Thanks for visited to my website
          <span className="block mt-7 lg:mt-10">-bot</span>
        </h1>
        <img className="mt-14" src="CN_Bullet.svg" alt="" />
      </div>
    </div>
  );
}
