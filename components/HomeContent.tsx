import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import GridBox from "./GridBox";
import CallToAction from "./CallToAction";

const HomeContent = () => {
  let textslide = useRef<HTMLDivElement>(null);
  let textslideback = useRef<HTMLDivElement>(null);
  let imageSlide = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "500px",
        end: "+=1200px",
        scrub: true,
      },
    });

    t1.to(textslide.current, { translateX: "600px" }, "a");
    t1.to(textslideback.current, { translateX: "-600px" }, "a");
  }, []);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageSlide.current,
        start: "-=300 +=200",
        end: "bottom +=400",
        scrub: true,
      },
    });

    t2.to(imageSlide.current, { translateX: "-1300px" });
  }, []);

  return (
    <div  className=" relative md:top-0 -top-96">
      <div className="text-slide md:pt-32  relative">
        <div className="md:w-[120%] w-[160%]  absolute -left-20 md:h-20 h-10 bg-violet-900 md:mb-0 rotate-6 shadow-2xl font-bold text-xl md:text-7xl">
          <div
            ref={textslideback}
            className="flex md:gap-6 gap-2 items-center justify-center h-full"
          >
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
            <p>ULTIMATE</p>
          </div>
        </div>
        <div className="md:w-[120%] w-[160%] absolute -left-20 md:h-20 h-10 bg-violet-600 -rotate-6 shadow-2xl text-xl md:text-7xl font-bold">
          <div
            ref={textslide}
            className="flex md:gap-6 gap-2 items-center justify-center h-full"
          >
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
            <p>TASTE</p>
          </div>
        </div>
        <div ref={imageSlide} className="md:flex hidden px-9 mt-60 relative h-[700px]">
          <Image
            className="rounded absolute "
            src={
              "https://images.unsplash.com/photo-1554795808-3231c32711cf?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="alt"
            width={400}
            height={620}
          />
          <Image
            className="absolute rounded shadow-2xl left-[26%] top-[47%] z-10"
            src={
              "https://images.unsplash.com/photo-1516455802208-06db096f4b54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="alt"
            width={500}
            height={100}
          />
          <Image
            className="absolute rounded shadow-2xl left-[53%] top-[17%]"
            src={
              "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="alt"
            width={600}
            height={80}
          />
          <Image src={""} alt="alt" width={300} height={300} />
          <Image
            className="absolute rounded shadow-2xl left-[83%] top-[32%] z-10"
            src={
              "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="alt"
            width={300}
            height={580}
          />
          <Image
            className="absolute rounded shadow-2xl left-[101%] top-[36%]"
            src={
              "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="alt"
            width={500}
            height={200}
          />
          <Image
            className="absolute rounded shadow-2xl left-[133%] top-[26%]"
            src={
              "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="alt"
            width={300}
            height={540}
          />
          <Image
            className="absolute rounded shadow-2xl left-[151%] top-[26%]"
            src={
              "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="alt"
            width={500}
            height={300}
          />
        </div>
        <CallToAction/>
        <GridBox/>
      </div>
    </div>
  );
};

export default HomeContent;
