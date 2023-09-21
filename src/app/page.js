"use client";
import { Power3, gsap } from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Home() {
  const comp = useRef();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 1);
        clearInterval(count);
      } else {
        setCounter(100);
        clearInterval(count);
      }
    }, 10);
  });
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".follow", { width: "0%", duration: 1.3, ease: Power3.easeOut })
        .to(".counter", { opacity: 0, duration: 0.7 })
        .to(".counter", { display: "none" })
        .to(".bar", { display: "none" })
        .to(
          ".follow",
          { height: "100%", ease: Power3.easeOut, duration: 1 },
          "-=.8"
        )
        .to(".follow", { width: "0%", ease: Power3.easeOut, duration: 1 })
        .to(".anim", { display: "none" });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <main ref={comp} className="w-screen h-screen relative">
      {/* Startup Animation  */}
      <div className="flex anim bg-black w-screen h-screen font-semibold text-7xl relative z-10 justify-center items-center">
        <h1 className="w-full h-1 bar absolute left-0 bg-white z-0"></h1>
        <h1 className="w-full h-1 follow absolute left-0 bg-orange-500 z-0"></h1>
        <h1 className="counter">{counter}%</h1>
      </div>
      <Image
        alt="bg-stars"
        width={1000}
        height={1000}
        className="w-screen absolute top-0 z-[-1] h-screen"
        src={"/stars.jpg"}
      />
      <div >

      </div>
    </main>
  );
}
