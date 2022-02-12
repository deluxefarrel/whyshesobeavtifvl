import React, { useState, useEffect } from "react";
export default function Profile() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="container mx-auto mt-20 flex flex-col"
      style={{ transform: `translateY(${offSetY * 0.1}px)` }}
    >
      <div id="about-this-website" className="p-6">
        <h2 className="text-2xl lg:text-4xl text-white font-sec font-bold w-96">
          About this website
        </h2>
        <p
          className="text-white font-sec tracking-tight leading-relaxed mt-10 
        text-xl lg:text-3xl"
        >
          i don t know btw why i m make this web lmaoo(just for fun website),i m
          just like in love/obsessed with this character (linda, from dreadout2)
          for 3 years maybe you know what i mean, you know she is my type
          girl.....,thank you for reading this weird article (sorry my english
          is bad) have a nice day.
          <img className="inline-block" src="/Rectangle.svg" />
        </p>
        <img className="mt-14" src="/CN_Bullet.svg" />
        <div id="link-game-social-media" className="w-96 mt-40">
          <h2 className="text-white text-2xl lg:text-3xl font-bold font-sec mt-20">
            Link to play <span className="block">DreadOut</span>
          </h2>
        </div>
        <p className="mt-5 flex items-center">
          <img src="/steam.png" className="w-10 h-10 inline-block" />
          <a
            rel="noreferrer"
            className="text-white font-sec hover:bg-white hover:text-black"
            target={"_blank"}
            href="https://store.steampowered.com/app/418950/DreadOut_Keepers_of_The_Dark/?curator_clanid=33371531"
          >
            DreadOut: Keepers of The Dark
          </a>
        </p>
        <p className="mt-5 flex items-center">
          <img src="/steam.png" className="w-10 h-10 inline-block" />
          <a
            rel="noreferrer"
            className="text-white font-sec hover:bg-white hover:text-black"
            target={"_blank"}
            href="https://store.steampowered.com/app/269790/DreadOut/"
          >
            DreadOut
          </a>
        </p>
        <p className="mt-5 flex items-center">
          <img src="/steam.png" className="w-10 h-10 inline-block" />
          <a
            rel="noreferrer"
            className=" text-white font-sec hover:bg-white hover:text-black"
            target={"_blank"}
            href="https://store.steampowered.com/app/945710/DreadOut_2/"
          >
            DreadOut2
          </a>
        </p>
        <p className="mt-5 flex items-center">
          <img src="/steam.png" className="w-10 h-10 inline-block" />
          <a
            rel="noreferrer"
            className="text-white font-sec hover:bg-white hover:text-black"
            target={"_blank"}
            href="https://store.steampowered.com/app/692930/DreadEye_VR/?curator_clanid=33371531"
          >
            DreadEye VR
          </a>
        </p>
        <div className=" w-96 ml-6 ">
          <h2 className="text-white text-md font-bold font-sec mt-5 mb-5">
            DreadOut Social Media
          </h2>
          <div className="flex items-center ">
            <img className="w-10 h-10 inline-block" src="/instagram.jpg" />
            <a
              rel="noreferrer"
              target={"_blank"}
              className="ml-3 text-white font-sec hover:bg-white text-sm hover:text-black"
              href="https://www.instagram.com/digitalhappinessofficial/"
            >
              @digitalhappinessofficial
            </a>
          </div>
          <div className="mt-3">
            <img className="w-10 h-10 inline-block" src="/instagram.jpg" />
            <a
              rel="noreferrer"
              target={"_blank"}
              className="ml-3 text-white font-sec hover:bg-white hover:text-black"
              href="https://www.instagram.com/dreadoutgame/"
            >
              @dreadoutgame
            </a>
          </div>
          <div className="mt-3">
            <img className="w-10 h-10 inline-block" src="/instagram.jpg" />
            <a
              rel="noreferrer"
              target="_blank"
              className="ml-3 text-white font-sec hover:bg-white hover:text-black"
              href="https://www.instagram.com/dreadoutmovie/"
            >
              @dreadoutmovie
            </a>
          </div>
          <img cl className="mt-14" src="/CN_Bullet.svg" />
        </div>
      </div>
    </div>
  );
}
