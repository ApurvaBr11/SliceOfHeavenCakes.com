'use client'
import usesidebartoggle from '@/app/stores/sidebartoggle';
import React from 'react'
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";


const Wrapper = ({children}:{children:React.ReactNode}) => {
    const {mode} = usesidebartoggle(state=>state);
    const ref = useRef(null);
  const options = {
    smooth: true,
  } 


  return (
    // <LocomotiveScrollProvider options={options} containerRef={ref}>

    <div data-scroll-container ref={ref} className={` w-full ${mode?'rtr':''} ${mode?' translate-x-2 translate-y-2 transition-all duration-1000 overflow-hidden ease-in-out rounded-lg shadow-2xl shadow-purple-950':'rounded-none transition-all duration-1000 translate-x-0 translate-y-0'}`}>{children}</div>   
      //  </LocomotiveScrollProvider>

  )
}

export default Wrapper