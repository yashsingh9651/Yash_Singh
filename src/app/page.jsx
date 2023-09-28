"use client";
import Typewriter from "typewriter-effect";
import { Power3, gsap } from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { tiltPrism } from "./fonts";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
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
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Loading Animation...
      const t1 = gsap.timeline();
      t1.from(".follow", { width: "0%", duration: 2, ease: Power3.easeOut })
        .to(".counter", { opacity: 0, duration: 0.7 })
        .to(".counter", { display: "none" })
        .to(".bar", { display: "none" })
        .to(
          ".follow",
          { height: "100%", ease: Power3.easeOut, duration: 1 },
          "-=.8"
        )
        .to(".follow", { width: "0%", ease: Power3.easeOut, duration: 1 })
        .to(".anim", { display: "none" })
        .from(".stars", { width: "0%", ease: Power3.easeOut, duration: 0.8 })
        .to(".page1", { css: { display: "block" } }, "-=.5")
        .from(".front", { y: 500, ease: Power3.easeOut, duration: 0.6 }, "-=.5")
        .from(".back", { y: 800, ease: Power3.easeOut, duration: 0.6 }, "-=.3")
        .from(
          ".planet1",
          { x: 500, ease: Power3.easeOut, duration: 0.6 },
          "-=.3"
        )
        .from(
          ".planet2",
          { x: -500, ease: Power3.easeOut, duration: 0.6 },
          "-=.3"
        )
        .from(
          ".rock1",
          { y: -200, ease: Power3.easeOut, duration: 0.6 },
          "-=.3"
        )
        .from(".rock2", { y: 350, ease: Power3.easeOut, duration: 0.6 }, "-=.3")
        .from(".rock3", { x: 300, ease: Power3.easeOut, duration: 0.6 }, "-=.3")
        .from(
          ".typed",
          { x: -500, opacity: 0, ease: Power3.easeOut, duration: 0.6 },
          "-=.3"
        )
        .from(
          ".info",
          { x: -700, opacity: 0, ease: Power3.easeOut, duration: 0.6 },
          "-=.3"
        )
        .from(
          ".media",
          {
            x: -700,
            opacity: 0,
            stagger: 0.2,
            ease: Power3.easeOut,
            duration: 1,
          },
          "-=.3"
        )
        .from(
          ".customShadow",
          { x: 500, opacity: 0, ease: Power3.easeOut, duration: 1 },
          "-=.3"
        )
        .from(".page2", { css: { display: "none" } }, "-=2");
      // ScrollTrigger Animation...
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <main ref={comp} className="w-screen">
      {/* Hero Page Starts */}
      <div className="w-screen h-screen relative">
        {/* Startup Animation starts */}
        <div className="flex anim bg-black w-screen h-screen font-semibold text-7xl relative z-10 justify-center items-center">
          <h1 className="w-full h-1 bar absolute left-0 bg-white z-0"></h1>
          <h1 className="w-full h-1 follow absolute left-0 bg-[#339FDD] z-0"></h1>
          <h1 className="counter">{counter}%</h1>
        </div>
        {/* Startup Animation Ends */}
        {/* bg star image */}
        <Image
          alt="bg-stars"
          width={1000}
          height={1000}
          className="w-screen absolute top-0 z-[-1] h-screen stars"
          src="/stars.webp"
        />
        <div className="hidden relative page1 w-screen h-screen overflow-hidden">
          {/* Galaxy Images Starts */}
          <Image
            width={15000}
            height={15000}
            className="w-full front h-full absolute object-cover top-0 left-0 z-20"
            src="/front.webp"
            alt="front"
          />
          <Image
            width={15000}
            height={15000}
            className="w-full back h-full absolute object-cover top-0 left-0 z-10"
            src="/back.webp"
            alt="back"
          />
          <Image
            width={1500}
            height={1500}
            className="w-40 planet2 absolute object-cover top-60 left-60 z-0"
            src="/planet2.webp"
            alt="planet2"
          />
          <Image
            width={1500}
            height={1500}
            className="w-36 absolute object-cover planet1 top-28 right-36 z-0"
            src="/planet1.webp"
            alt="planet1"
          />
          <Image
            width={1500}
            height={1500}
            className="w-20 absolute object-cover top-20 rock1 left-80 z-0"
            src="/rock1.webp"
            alt="rock1"
          />
          <Image
            width={1500}
            height={1500}
            className="w-20 absolute object-cover top-1/2 rock2 left-1/2 z-0"
            src="/rock2.webp"
            alt="rock2"
          />
          <Image
            width={1500}
            height={1500}
            className="w-20 absolute object-cover bottom-36 rock3 right-36 z-0"
            src="/rock3.webp"
            alt="rock3"
          />
          {/* Galaxy Images Ends */}
          {/* Content Box Starts */}
          <div className="md:w-4/5 w-[96%] md:mt-40 mt-20 mx-auto relative z-50">
            {/* Type Writter Effect Starts */}
            <div className="flex uppercase text-xl md:text-4xl font-medium typed">
              <h1>i am &nbsp;</h1>
              <h1 className={`${tiltPrism.className} text-purple-500`}>
                <Typewriter
                  options={{
                    strings: ["yash singh", "a full stack web developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            {/* Type Writter Effect Ends */}
            {/* Developer image and his info Starts*/}
            <div className="lg:flex items-center justify-between">
              {/* Left Box start */}
              <div>
                <h1 className="capitalize info lg:w-2/3 w-full text-white rounded p-3 backdrop-blur lg:my-10 my-2 lg:font-medium text-center md:text-lg text-xs bg-[#c2c2c24a]">
                  Front-End Developer Who Writes Clean, Elegant and Efficient
                  Code. <br />
                  <br /> I'm probably the most passionate web developer you will
                  ever get to work with.If you have a great project that needs
                  some amazing skills, I'm your guy.I can create amazing
                  responsive website
                </h1>
                {/* Social Media Box start */}
                <div className="flex gap-5 md:text-3xl text-white pb-10 lg:pb-0">
                  <Link
                    target={"_blank"}
                    href="https://github.com/yashsingh9651"
                    className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media"
                  >
                    <BsGithub />
                  </Link>
                  <Link
                    target={"_blank"}
                    href="https://www.linkedin.com/in/yash-singh-a191b0262/"
                    className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media"
                  >
                    <ImLinkedin />
                  </Link>
                  <Link
                    target={"_blank"}
                    href="https://twitter.com/yash_singh9"
                    className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media"
                  >
                    <AiOutlineTwitter />
                  </Link>
                  <Link
                    target={"_blank"}
                    href="https://www.instagram.com/yash27_singh/"
                    className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media"
                  >
                    <AiFillInstagram />
                  </Link>
                </div>
                {/* Media Box End */}
              </div>
              {/* Left Box End */}
              {/* Right Box Start */}
              <div>
                <Image
                  className="rounded-md mx-auto md:w-[450px] lg:w-[650px] customShadow"
                  width={300}
                  height={300}
                  src="/yash.webp"
                  alt="Yash Singh"
                />
              </div>
              {/* Right Box End */}
            </div>
            {/* Developer image and his info Ends*/}
          </div>
          {/* Content Box Ends */}
        </div>
      </div>
      {/* Hero Page Ends */}
      {/* PORTFOLIO PAGE STARTS */}
      <div className="relative h-screen page2">
        <Portfolio />
      </div>
      <div className="page2">
      <Projects/>
      <Contact/>
      </div>
    </main>
  );
}
