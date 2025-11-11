import React, { useState, useEffect } from "react";
export default function Profile() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container mx-auto flex flex-col">
      <div id="about-this-website" className="p-6 w-full relative">
        <h2 className="text-2xl lg:text-4xl text-amber-100  font-sec relative -top-28 sm:-top-12 md:-top-10 text-center w-full font-bold ">
          About this website
        </h2>
        <p
          className="text-amber-100  font-sec tracking-tight leading-relaxed mt-10
        text-xl lg:text-3xl"
        >
          i don&#39;t know why i make this web(just for fun website),just in
          love with this character (Linda, from dreadout 2) she is my type,
          thank you for reading this article have a nice day.
        </p>
        <img className="mt-14" src="/CN_Bullet.svg" />
        <div id="link-game-social-media" className="w-96 mt-40">
          <h2 className="text-amber-100 text-2xl lg:text-3xl font-bold font-sec mt-20">
            Link to play <span className="block">DreadOut</span>
          </h2>
        </div>
        <p className="mt-5 flex items-center">
          <img src="/steam.png" className="w-10 h-10 inline-block" />
          <a
            rel="noreferrer"
            className="text-amber-100  font-sec hover:bg-white hover:text-black"
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
            className="text-amber-100  font-sec hover:bg-white hover:text-black"
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
            className=" text-amber-100  font-sec hover:bg-white hover:text-black"
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
            className="text-amber-100  font-sec hover:bg-white hover:text-black"
            target={"_blank"}
            href="https://store.steampowered.com/app/692930/DreadEye_VR/?curator_clanid=33371531"
          >
            DreadEye VR
          </a>
        </p>
        <div className=" w-96 ml-6 ">
          <h2 className="text-amber-100  text-md font-bold font-sec mt-5 mb-5">
            DreadOut Social Media
          </h2>
          <div className="flex items-center ">
            <img className="w-10 h-10 inline-block" src="/instagram.jpg" />
            <a
              rel="noreferrer"
              target={"_blank"}
              className="ml-3 text-amber-100  font-sec hover:bg-white text-sm hover:text-black"
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
              className="ml-3 text-amber-100  font-sec hover:bg-white hover:text-black"
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
              className="ml-3 text-amber-100  font-sec hover:bg-white hover:text-black"
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
