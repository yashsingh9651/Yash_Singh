"use client";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { FiSettings } from "react-icons/fi";
import { ImCss3, ImHtmlFive } from "react-icons/im";
import { SiJavascript, SiTailwindcss, SiRedux, SiGithub } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { phudu } from "../app/fonts";
const Portfolio = () => {
  const page2 = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context((self) => {
      const yash = self.selector(".yash");
      const text = self.selector(".text");
      const lang = self.selector(".lang");
      const lang2 = self.selector(".lang2");
      if (window.innerWidth >= 1200) {
        const t2 = gsap.timeline();
        t2.from(yash, {
          rotation: 360,
          opacity: 0.1,
          x: -500,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: yash,
            start: "top 80%",
            end: "bottom 25%",
            scrub: true,
          },
        })
          .from(text, {
            opacity: 0.2,
            x: 1500,
            stagger: 0.15,
            ease: Power3.easeOut,
            scrollTrigger: {
              trigger: text,
              start: "top 70%",
              end: "bottom 20%",
              scrub: true,
            },
          })
          .from(lang, {
            rotation: 360,
            opacity: 0.2,
            stagger: 0.1,
            x: -650,
            ease: Power3.easeOut,
            scrollTrigger: {
              trigger: lang,
              start: "top 100%",
              end: "bottom 65%",
              scrub: true,
            },
          })
          .from(lang2, {
            rotation: 360,
            opacity: 0.2,
            stagger: 0.1,
            x: 650,
            ease: Power3.easeOut,
            scrollTrigger: {
              trigger: lang2,
              start: "top 100%",
              end: "bottom 65%",
              scrub: true,
            },
          });
      }
    }, page2);
    return () => ctx.revert();
  }, []);
  return (
    <>
      {/* Background Animation */}
      <section className="w-screen overflow-hidden h-screen absolute z-40">
        <div className="absolute overflow-hidden z-40 w-screen h-screen">
          <Image
            width={100}
            height={100}
            src="/planet1.webp"
            className="w-36 animatePlanet1 object-cover absolute"
            alt="planet1"
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <Image
            width={100}
            height={100}
            src="/planet2.webp"
            className="w-36 object-cover animatePlanet3 absolute"
            alt="planet2"
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <Image
            width={100}
            height={100}
            className="w-20 absolute animatePlanet1 top-40 object-cover rounded-lg"
            src="/rock1.webp"
            alt="rock1"
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
          <Image
            width={100}
            height={100}
            className="w-20 absolute animatePlanet3 top-80 object-cover rounded-lg"
            src="/rock2.webp"
            alt="rock2"
          />
        </div>
        <div className="overflow-hidden absolute z-40 w-screen h-screen">
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
          className="w-screen h-screen object-cover z-30 absolute"
          alt=""
        />
      </section>
      <div ref={page2} className="h-screen relative p-3 z-50">
        <div className="flex justify-start bg-[rgba(255,255,255,0.06)] border border-[#ffffff42] backdrop-blur rounded p-1">
          <div className="image w-[200px] sm:w-[100px] md:w-[300px]">
            <Image
              width={1000}
              height={1000}
              alt="Yash Singh"
              className="rounded-md yash"
              src="/full.jpg"
            />
          </div>
          <div className="px-2">
            <h1 className="md:text-2xl md:font-semibold mb-2 text">
              I am{" "}
              <span
                className={`md:text-4xl ${phudu.className} md:font-bold text-purple-800`}
              >
                Yash Singh
              </span>
            </h1>
            <div className="text-[10px] md:text-2xl md:font-medium">
              <h1 className="text">Currently Living In Greator Noida, Uttar Pradesh India.</h1> 
              <h1 className="text">Having 10 Months Of Experience In Full Stack Web Development.</h1>
              <h1 className="text">I Mostly Work With Java Script And Its Framework React Js(Next.js).</h1>
              <h1 className="text">I Have Good Expertise In Building Great Products From Scratch.</h1>
            </div>
          </div>
        </div>
          {/* My Skills Section */}
        <h1 className="flex items-center sm:text-base md:text-3xl md:font-medium gap-2 p-1 mt-10 sm:mt-0 md:mt-10 md:p-2">
          <FiSettings />
          <div className={`${phudu.className}`}>My Skills</div>
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2 md:gap-3 text-lg">
          {/* Language Section */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[#ffffff42] backdrop-blur rounded p-1 text-lg sm:text-sm md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Languages :</h1>
            <div className="grid grid-cols-3 text-2xl sm:text-base md:text-3xl pt-2">
              <div className="flex items-center gap-1 lang">
                <SiJavascript className="text-[#f0db4f] bg-[#323330]" />
                <h1 className="text-sm md:text-xl">Java Script</h1>
              </div>
              <div className="flex items-center gap-1 lang">
                <ImHtmlFive className="text-[#e34c26]" />
                <h1 className="text-sm md:text-xl">HTML</h1>
              </div>
              <div className="flex items-center gap-1 lang">
                <ImCss3 className="text-[#2965f1]" />
                <h1 className="text-sm md:text-xl">CSS</h1>
              </div>
            </div>
          </div>
          {/* Framework Section */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[#ffffff42] backdrop-blur rounded p-1 text-lg sm:text-sm md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Frameworks :</h1>
            <div className="grid grid-cols-3 text-3xl sm:text-base md:text-4xl pt-2">
              <div className="flex items-center gap-1 lang2">
                <SiTailwindcss className="text-[#38bdf8]" />
                <h1 className="text-sm md:text-xl">Tailwind</h1>
              </div>
              <div className="flex items-center gap-1 lang2">
                <TbBrandNextjs className="text-[#7711f7]" />
                <h1 className="text-sm md:text-xl">Next.js</h1>
              </div>
            </div>
          </div>
          {/* Libraries Section */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[#ffffff42] backdrop-blur rounded p-1 text-lg sm:text-sm md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Libraries :</h1>
            <div className="grid grid-cols-3 text-2xl md:text-3xl sm:text-base pt-2">
              <div className="flex items-center gap-1 lang">
                <RiReactjsLine className="text-[#61dafb]" />
                <h1 className="text-sm md:text-xl">React</h1>
              </div>
              <div className="flex items-center gap-1 lang">
                <SiRedux className="text-[#764abc]" />
                <h1 className="text-sm md:text-xl">Redux</h1>
              </div>
            </div>
          </div>
          {/* Tools Section */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[#ffffff42] backdrop-blur rounded p-1 text-lg sm:text-sm md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Tools :</h1>
            <div className="grid grid-cols-3 text-3xl sm:text-base md:text-2xl pt-2">
              <div className="flex items-center gap-1 lang2">
                <SiGithub className="text-white" />
                <h1 className="text-sm md:text-xl">Git Hub</h1>
              </div>
              <div className="flex items-center gap-1 lang2">
                <FaGitAlt className="text-[#f34f29]" />
                <h1 className="text-sm md:text-xl">Git</h1>
              </div>
            </div>
          </div>
          {/* Databse Section */}
          <div className="bg-[rgba(255,255,255,0.06)] border border-[#ffffff42] backdrop-blur rounded p-1 text-lg sm:text-sm md:text-xl md:p-2">
            <h1 className="md:text-2xl md:font-medium">Database :</h1>
            <div className="grid grid-cols-3 text-3xl md:text-4xl pt-2 sm:text-base">
              <div className="flex items-center gap-1 lang">
                <DiMongodb className="text-[#589636]" />
                <h1 className="text-sm md:text-xl">Mongo DB</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;