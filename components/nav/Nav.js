import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="">
      <div className=" flex flex-col lg:flex-row relative w-full z-50 text-white p-5">
        <div className="flex items-center justify-between px-4 py-4 lg:py-0">
          <div>
            <a href="#" className="text-amber-100 font-semibold uppercase">
              Farrel
            </a>
          </div>
          <div>
            <button
              onClick={() => setOpen(!isOpen)}
              className="focus:outline-none text-white block lg:hidden"
            >
              <svg
                className="h-6 w-6 text-amber-100 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row justify-between w-full`}
        >
          <div className="flex flex-col lg:flex-row">
            <a
              href="#read-me"
              className="block text-amber-100 uppercase px-5 py-5 hover:text-white text-sm"
            >
              Read me
            </a>
            <a
              href="#about-this-website"
              className="block text-amber-100 uppercase px-5 py-5 hover:text-white text-sm"
            >
              About this website
            </a>
            <a
              href="#link-game-social-media"
              className="block text-amber-100  uppercase px-5 py-5 hover:text-white text-sm"
            >
              link games & social media
            </a>
            <a
              href="#contact-me"
              className="block text-amber-100  uppercase px-5 py-5 hover:text-white text-sm"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
