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
        <h2 className="text-white text-4xl font-bold font-sec mb-10">
          Contact Me
        </h2>
        <img
          className="w-10 h-10 inline-block"
          src="https://cdn.cdnlogo.com/logos/g/24/gmail-icon.svg"
        />
        <a
          className="ml-3 text-white font-sec text-xs hover:bg-white hover:text-black"
          href="mailto:deluxefarrel999@gmail.com"
          rel="noreferrer"
        >
          (deluxefarrel999@gmail.com)
        </a>
        <div className="mt-5 flex items-center">
          <img className="w-10 h-10 inline-block" src="/instagram.jpg" />{" "}
          <a
            className="ml-3 text-white font-sec hover:bg-white hover:text-black"
            target={"_blank"}
            rel="noreferrer"
            href="https://www.instagram.com/farreljanuarr/"
          >
            @farreljanuarr
          </a>
        </div>
        <img className="mt-14 mb-32" src="/triangle.svg" alt="" />
      </div>
    </div>
  );
}
