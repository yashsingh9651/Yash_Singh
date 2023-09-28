"use client";
import React, { useLayoutEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { Schema } from "../schema";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { phudu } from "@/app/fonts";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Contact = () => {
    const page4 = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context((self) => {
          const contHead = self.selector(".contHead");
          const inp = self.selector(".inp");
          const media2 = self.selector(".media2");
          if (window.innerWidth >= 1000) {
            const t5 = gsap.timeline();
            t5.from(contHead, {
              scale: 0.1,
              x: -1000,
              ease: Power3.easeOut,
              scrollTrigger: {
                trigger: contHead,
                start: "top 80%",
                end: "bottom 35%",
                scrub: true,
              },
            })
            .from(inp, {
              scale: 0.1,
              width:"0px",
              x: 600,
              stagger:.15,
              ease: Power3.easeOut,
              scrollTrigger: {
                trigger: inp,
                start: "top 90%",
                end: "bottom 40%",
                scrub: true,
              },
            })
            .from(media2, {
              scale: 0.1,
              width:"0px",
              x: -1000,
              stagger:.15,
              ease: Power3.easeOut,
              scrollTrigger: {
                trigger: media2,
                start: "top 86%",
                end: "bottom center",
                scrub: true,
              },
            })
          }
        }, page4);
        return () => ctx.revert();
    }, [])
   // ? Template
   const data = {
    name: "",
    email: "",
    message: "",
  };
  // ? Handeling Formik...
  const form = useRef();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: data,
      validationSchema: Schema,
      onSubmit: async (values, action) => {
        emailjs
          .sendForm(
            "service_gxm49ge",
            "template_hr64q6m",
            form.current,
            "pLJS6d0WCzJXu3_og"
          )
          .then(
            (result) => {
              toast.success("Thanks for contacting. I'll get back to you as soon as possible", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              },
              (error) => {
              toast.error("Internal Server Error", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
          );
        const { name, email, message } = values;
        await fetch(
          "https://my-portfolio-48891-default-rtdb.firebaseio.com/contactlist.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
            }),
          }
        );
        action.resetForm();
      },
    });
  return (
    <>
      <section className="w-screen overflow-hidden h-screen absolute z-40">
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
          className="w-screen h-screen object-cover z-0 absolute"
          alt=""
        />
      </section>
      {/* Main Section */}
      <div ref={page4} className="relative w-screen z-50">
        <ToastContainer />
        <div className="w-4/5 h-screen mx-auto flex flex-col justify-center items-center text-center">
          {/* Heading */}
          <h1 className={`text-lg contHead text-white font-semibold pb-4 md:text-4xl ${phudu.className}`}>
            Feel Free to Contact
            <hr />
          </h1>
          {/* Contact Box */}
          <div className="relative w-full h-[60vh] lg:flex lg:justify-between lg:items-center sm:h-[50vh] md:h-[60vh] rounded backdrop-blur-sm">
            <div className="w-[170px] h-[170px] flex justify-center items-end md:w-[300px] md:h-[300px] bg-[rgba(255,255,255,0.4)] rounded-full animate-pulse">
              <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] bg-white animate-bounce rounded-full"></div>
            </div>
            <div
              className={`w-[150px] h-[150px] rounded md:w-[275px] border media2 border-white overflow-hidden md:h-[275px] absolute top-3 right-20 sm:left-20 md:left-40 md:top-16`}
            >
              <Image width={2000} height={2000} alt="developer" className="rounded text-black" src="/yash.webp" />
            </div>
            <div className="font-[Arvo] hidden sm:block md:hidden lg:block lg:w-3/6">
              <form ref={form} onSubmit={handleSubmit}>
                {/* ? Name Text Area */}
                <div className="relative">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded inp text-black px-2 p-1 m-1 w-full sm:text-sm lg:text-lg"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    autoComplete="on"
                  />
                  {errors.name && touched.name ? (
                    <p className="absolute top-3 right-2 text-red-600">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                {/* ? Email Text Area */}
                <div className="relative">
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded inp text-black px-2 p-1 m-1 w-full sm:text-sm lg:text-lg"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    autoComplete="on"
                  />
                  {errors.email && touched.email ? (
                    <p className="absolute top-3 right-2 text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                {/* ? Message Text Area */}
                <div className="relative">
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="resize-none inp text-black rounded px-2 p-1 m-1 w-full sm:text-sm lg:text-lg sm:h-[8vw]"
                    name="message"
                    placeholder="Message"
                    autoComplete="off"
                  ></textarea>
                  {errors.message && touched.message ? (
                    <p className="absolute top-3 right-2 text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
                {/* Submit Button */}
                <input
                  className="p-1 w-full m-1 inp rounded text-black bg-white active:scale-90 font-semibold hover:bg-[rgba(255,255,255,0.7)] sm:font-extralight sm:text-sm lg:font-bold lg:text-xl"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
            {/* Responsive Design */}
            <div className="z-50 absolute bottom-0 w-full font-[Arvo] sm:hidden md:block lg:hidden">
              <form ref={form} onSubmit={handleSubmit}>
                {/* Name Area */}
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded text-black px-2 p-1 m-1 w-11/12 md:text-2xl"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  autoComplete="on"
                />
                {/* Email Area */}
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded text-black px-2 p-1 m-1 w-11/12 md:text-2xl"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  autoComplete="on"
                />
                {/* Message Area */}
                <textarea
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="resize-none text-black rounded px-2 p-1 m-1 w-11/12 md:text-2xl h-[20vw]"
                  name="message"
                  placeholder="Message"
                  value={values.message}
                  autoComplete="off"
                ></textarea>
                <input
                  className="p-1 w-11/12 m-1 mb-5 text-black rounded bg-white active:scale-90 font-semibold md:font-bold md:text-3xl md:mb-1"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
          <div className="flex gap-3 text-xl md:text-3xl text-white mt-5 lg:mt-0">
            <a
              target={"_blank"}
              href="https://github.com/yashsingh9651"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media2"
            >
              <BsGithub />
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/yash-singh-a191b0262/"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media2"
            >
              <ImLinkedin />
            </a>
            <a
              target={"_blank"}
              href="https://twitter.com/yash_singh9"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media2"
            >
              <AiOutlineTwitter />
            </a>
            <a
              target={"_blank"}
              href="https://www.instagram.com/yash27_singh/"
              className="bg-[#c2c2c24a] p-1 rounded-md backdrop-blur media2"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;