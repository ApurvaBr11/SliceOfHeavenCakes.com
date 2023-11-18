import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const GridBox = () => {
  let box = useRef<HTMLDivElement>(null);
  let main = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "-=500 top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    t1.to(box.current, { border: "4px" });
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: any) => {
    setIsHovered(true);
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: any) => {
    if (isHovered) {
      updatePosition(e);
    }
  };
  const updatePosition = (e: any) => {
    const { clientX: x, clientY: y } = e;
    const follower = followerRef.current;

    if (follower) {
      const rect = follower.getBoundingClientRect();
      const offsetX = rect.width / 2;
      const offsetY = rect.height /2;
      gsap.to(follower, {
        duration: 0.3,
        x: x - offsetX,
        y: y - offsetY,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    gsap.set(followerRef.current, { opacity: 0 });
  }, []);

  return (
    <div
      ref={main}
      className=" h-[1050px] grid grid-cols-4 grid-rows-4 gap-4 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div
          ref={followerRef}
          className="absolute w-5 h-5 z-50 bg-gradient-to-br from-violet-600 via-purple-950 to-violet-900 rounded-full pointer-events-none;"
        ></div>
      )}
      <div
        ref={box}
        className=" grbox overflow-hidden h-full bg-red-800 col-span-3  w-full"
      >
        <img className=" bg-cover relative bottom-36" src={"https://images.unsplash.com/photo-1517992159470-5f9b04759e98?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="g" />
      </div>
      <div className=" grbox overflow-hidden h-full bg-red-800  w-full">
        <img
          className=" bg-cover scale-150 relative top-8"
          src={
            "https://images.unsplash.com/photo-1612198791424-dffa2eb9eb42?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="g"
        />
      </div>
      <div className=" grbox overflow-hidden h-full row-span-2  w-full relative">
        <img
          className=" bg-cover absolute "
          src={
            "https://images.unsplash.com/photo-1565060218114-26c6c9978e4d?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="g"
        />
      </div>
      <div className=" grbox overflow-hidden h-full bg-red-800  w-full">
        <img className=" bg-cover" src={"https://images.unsplash.com/photo-1600326145552-327f74b9c189?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="g" />
      </div>
      <div className=" grbox overflow-hidden h-full bg-red-800  w-full">
        <img className=" bg-cover relative bottom-20" src={"https://images.unsplash.com/photo-1599748724588-e98bf13d01f0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="g" />
      </div>
      <div className=" grbox overflow-hidden h-full bg-red-800  w-full">
        <img className=" bg-cover scale-125" src={"https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="g" />
      </div>
      <div className=" grbox overflow-hidden h-full  w-full">
        <img className=" bg-cover scale-150 " src={"https://images.unsplash.com/photo-1508737690671-77fe4101791e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="g" />
      </div>
      <div className=" grbox overflow-hidden h-full bg-red-800 col-span-2  w-full">
        <img className=" bg-cover relative bottom-16" src={"https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="g" />
      </div>
    </div>
  );
};

export default GridBox;
