"use client";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { BsArrowsFullscreen,BsGithub} from 'react-icons/bs';

const Projects = () => {
  const page3 = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context((self) => {
      const proHead = self.selector(".proHead");
      const box = self.selector(".box");
      if (window.innerWidth >= 1200) {
        const t2 = gsap.timeline();
        t2.from(proHead, {
          scale: 0.1,
          x: 1000,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: proHead,
            start: "top 80%",
            end: "bottom 35%",
            scrub: true,
          },
        }).from(box, {
          scale: 0.1,
          width:"0px",
          x: -1000,
          stagger:.15,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: box,
            start: "top 100%",
            end: "bottom center",
            scrub: true,
          },
        })
      }
    }, page3);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section ref={page3} className="w-screen overflow-x-hidden relative min-h-screen overflow-y-hidden flex justify-center items-center">
        {/* Background Animation */}
      <div className="absolute overflow-hidden z-10 w-screen h-screen">
          <Image
            width={100}
            height={100}
            src="/planet1.webp"
            className="w-36 animatePlanet1 object-cover absolute"
            alt="planet1"
          />
        </div>
        <div className="overflow-hidden absolute z-10 w-screen h-screen">
          <Image
            width={100}
            height={100}
            src="/planet2.webp"
            className="w-36 object-cover animatePlanet3 absolute"
            alt="planet2"
          />
        </div>
        <div className="overflow-hidden absolute z-10 w-screen h-screen">
          <Image
            width={100}
            height={100}
            className="w-20 absolute animatePlanet1 top-40 object-cover rounded-lg"
            src="/rock1.webp"
            alt="rock1"
          />
        </div>
        <div className="overflow-hidden absolute z-10 w-screen h-screen">
          <Image
            width={100}
            height={100}
            className="w-20 absolute animatePlanet3 top-80 object-cover rounded-lg"
            src="/rock2.webp"
            alt="rock2"
          />
        </div>
        <div className="overflow-hidden absolute z-10 w-screen h-screen">
          <Image
            width={100}
            height={100}
            className="w-20 absolute animatePlanet2 object-cover rounded-lg"
            src="/rock3.webp"
            alt="rock3"
          />
        </div>
        <Image
          width={10000}
          height={10000}
          src="/stars.webp"
          className="w-full h-full object-cover z-0 absolute"
          alt=""
        />
          <h1 className="uppercase text-2xl lg:text-5xl absolute top-10 sm:top-4 md:top-10 z-50 proHead text-white">Top Projects</h1>
        <div className="relative z-40 p-3 lg:p-0">
          <div className="max-w-fit lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-14 gap-4 grid mt-20 sm:mt-10 md:mt-20 lg:mt-0">
            {/* First Project */}
            <div className="relative w-[300px] h-[250px] sm:w-[250px] sm:h-[150px] md:w-[400px] md:h-[300px] rounded-lg box">
              <div className="w-full h-full glass rounded-lg p-3 flex flex-col items-center justify-between text-purple-500">
                <h1 className="text-lg sm:text-sm md:text-lg font-medium underline underline-offset-4 text-center mb-4">Stock Management & Invoicing</h1>
                <h2 className="capitalize text-base sm:text-xs md:text-base">Easiest Way to manage your stocks and billing details.You can also print the bills.used mongoDB for the database.</h2>
                <div className="flex justify-between gap-5 text-3xl sm:text-xl md:text-3xl items-center mb-2 text-black">
                  {/* <Link target="_blank" href="https://github.com/yashsingh9651/Stock_Management"><BsGithub/></Link> */}
                  <Link target="_blank" href="https://akankshaenterprises.xyz"><BsArrowsFullscreen/></Link>
                </div>
              </div>
              <Image
                width={1000}
                height={1000}
                alt="project"
                src="/stock.jpg"
                className="img w-full rounded-lg h-full object-cover"
              ></Image>
            </div>
            {/* Second Project */}
            <div className="relative w-[300px] h-[250px] sm:w-[250px] sm:h-[150px] md:w-[400px] md:h-[300px] rounded-lg box">
              <div className="w-full h-full glass rounded-lg p-3 flex flex-col items-center justify-between text-slate-600">
                <h1 className="text-lg sm:text-sm md:text-lg font-medium underline underline-offset-4 text-center mb-4">Hackathon Official Website</h1>
                <h2 className="capitalize text-base sm:text-xs md:text-base">I worked as a team lead and guided the teammates for better UI/UX design in creating DEXTERIX 4.0 official hackathon website</h2>
                <div className="flex justify-between gap-5 text-3xl sm:text-xl md:text-3xl items-center mb-2 text-black">
                  <Link target="_blank" href="https://github.com/technojam/4.0"><BsGithub/></Link>
                  <Link target="_blank" href="https://dexterix.technojam.in"><BsArrowsFullscreen/></Link>
                </div>
              </div>
              <Image
                width={1000}
                height={1000}
                alt="project"
                src="/kanban.jpg"
                className="img w-full rounded-lg h-full object-cover"
              ></Image>
            </div>
            {/* Third Project */}
            <div className="relative w-[300px] h-[250px] sm:w-[250px] sm:h-[150px] md:w-[400px] md:h-[300px] rounded-lg box">
              <div className="w-full h-full glass rounded-lg p-3 flex flex-col items-center justify-between text-white">
                <h1 className="text-lg sm:text-sm md:text-lg font-medium underline underline-offset-4 text-center mb-4">SecreIPDATA</h1>
                <h2 className="capitalize text-base sm:text-xs md:text-base">A frontend website created for a client who provides ip services.</h2>
                <div className="flex justify-between gap-5 text-3xl sm:text-xl md:text-3xl items-center mb-2 text-black">
                  {/* <Link target="_blank" href="https://github.com/yashsingh9651/IronParadise"><BsGithub/></Link> */}
                  <Link target="_blank" href="https://secureipdata.com/"><BsArrowsFullscreen/></Link>
                </div>
              </div>
              <Image
                width={1000}
                height={1000}
                alt="project"
                src="/client.jpg"
                className="img w-full rounded-lg h-full object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;