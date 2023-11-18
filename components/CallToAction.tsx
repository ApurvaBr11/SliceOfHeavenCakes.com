import React from "react";

const CallToAction = () => {
  return (
    <div className="h-[600px] flex justify-center items-center relative">
      <div className="h-32 w-32 rounded-full overflow-hidden flex justify-center items-center absolute top-32 left-20">
        <img
          className="scale-150"
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-32 w-32 rounded-full overflow-hidden flex justify-center items-center absolute top-32 right-20">
        <img
          className=""
          src="https://images.unsplash.com/photo-1544155891-969f15a055d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-44 w-44 rounded-full overflow-hidden flex justify-center items-center absolute bottom-36 right-44">
        <img
          className=""
          src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-44 w-44 rounded-full overflow-hidden flex justify-center items-center absolute bottom-32 left-48">
        <img
          className="scale-150"
          src="https://images.unsplash.com/uploads/1411160110892ab555b6f/80b0d25e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="text-center text-5xl font-bold leading-normal">
        <p>Your Each and Every Special Day </p>
        <p>Is so special for us</p>
        <div className="flex justify-center items-center gap-5">
          <div className="px-8 cursor-pointer py-2 rounded-full border-violet-400 hover:border-violet-500 text-white border  text-xs">Visit Us</div>
          <div className="px-8 cursor-pointer py-2 rounded-full bg-violet-400 hover:bg-violet-500 text-black  text-xs">Order Now</div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
