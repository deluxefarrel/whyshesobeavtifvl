import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function Content() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.scrollY);
  console.log(offSetY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <div className="flex items-center justify-center mt-8 min-h-screen relative">
        <Image
          className="__background"
          src="/background2.jpg"
          layout="fill"
          alt="Linda"
        />
      </div>
    </main>
  );
}
