import React, { useState, useEffect } from "react";

export default function Content() {
  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => setOffSetY(window.scrollY);
  console.log(offSetY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      <div className="relative flex items-center justify-center h-screen md:h-[90vh] sm:h-[80vh] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-contain"
          src="/hero.mov"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay (opsional untuk efek gelap / kontras teks) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      </div>
    </main>
  );
}
