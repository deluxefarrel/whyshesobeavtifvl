import React, { useState, useEffect } from "react";
export default function Contact() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="container mx-auto p-6 mt-20 flex"
      style={{ transform: `translateY(${offSetY * 0.1}px)` }}
    >
      <div id="contact-me" className="mt-15">
        <h2 className="text-amber-100 text-4xl font-bold font-sec mb-10">
          Contact Me
        </h2>
        <img
          className="w-10 h-10 inline-block"
          src="https://cdn.cdnlogo.com/logos/g/24/gmail-icon.svg"
        />
        <a
          className="ml-3 text-amber-100 font-sec text-xs hover:bg-white hover:text-black"
          href="mailto:deluxefarrel999@gmail.com"
          rel="noreferrer"
        >
          (deluxefarrel999@gmail.com)
        </a>
        <div className="mt-5 flex items-center">
          <img className="w-10 h-10 inline-block" src="/instagram.jpg" />{" "}
          <a
            className="ml-3 text-amber-100 font-sec hover:bg-white hover:text-black"
            target={"_blank"}
            rel="noreferrer"
            href="https://www.instagram.com/farreljanuarr/"
          >
            @farreljanuarr
          </a>
        </div>
        <svg
          width="156"
          height="154"
          viewBox="0 0 156 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.03642 67.7822L107.504 10.2599L110.959 118.458L2.03642 67.7822Z"
            fill="#d8caaa"
          />
          <path
            d="M65.0853 119.823L130.861 88.263L132.741 147.123L65.0853 119.823Z"
            fill="#d8caaa"
          />
          <defs>
            <linearGradient
              id="paint0_linear_410_84"
              x1="107.5"
              y1="9.99999"
              x2="68"
              y2="98.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.190909" stop-color="#d8caaa" />
              <stop offset="1" stop-color="#d8caaa" stop-opacity="0.49" />
              <stop offset="1" stop-color="#d8caaa" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_410_84"
              x1="130.86"
              y1="88.1216"
              x2="111.393"
              y2="138.436"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.119792" stop-color="#d8caaa" />
              <stop offset="0.190909" stop-color="#d8caaa" />
              <stop offset="1" stop-color="#d8caaa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
