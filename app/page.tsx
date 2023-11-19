"use client";
import usesidebartoggle from "./stores/sidebartoggle";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e:any) => {
      console.log(e);
    });

    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  let ref = useRef<HTMLDivElement>(null);
  let text = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "0px",
        end: "+=500px",
        scrub: true,
      },
    });

    t1.to(ref.current, { height: "600px" }, "a").to(
      ref.current,
      { borderRadius: "800px" },
      "a"
    );
    // .to(text.current , {rotate:"-16deg"},"a")
  }, []);
  const { changeMode } = usesidebartoggle((state) => state);

  return (
    <main className=" bg-black text-white md:p-5 p-2  relative main">
      <button onClick={changeMode} className="mb-[300px]">
        Toggle
      </button>
      <div className="yp text-xl md:text-7xl absolute w-full top-32 justify-center flex flex-col items-center" >
        <p className=" font-bold " >
          We all are so in{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-pink-600">
            Wait
          </span>{" "}
          for you
        </p>
        <div className=" flex md:gap-4 gap-1  font-bold" >
          We serve the best{" "}
          <div
            ref={text}
            className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-700  to-pink-600"
          >
            Cakes
          </div>
        </div>
        <p className="w-[60%] text-center text-xs font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nihil eligendi culpa unde assumenda quia officia, debitis quasi a
          architecto? Possimus laudantium dolor sequi fugit quibusdam cupiditate
          error inventore distinctio.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className=" overflow-hidden " ref={ref}>
          <Image
            src={
              "https://images.unsplash.com/photo-1695653423459-beb6b8a8169b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="xyz"
            height={5000}
            width={5000}
          ></Image>
        </div>
      </div>
      <HomeContent />
    </main>
  );
}
