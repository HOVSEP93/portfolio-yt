import React from "react";

const Intro = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-20 ">
      <div className="flex flex-col space-y-10">
        <h1 className="text-7xl font-semibold text-primary sm:text-6xl dark:text-third">
          Hi there i'm <br />
          <b className="text-secondary uppercase">dev scorpion</b>
        </h1>
        <h1 className="text-5xl flex font-semibold sm:text-3xl dark:text-third">
          Front-End Developer
        </h1>
        {/* <button className="px-16 py-5 bg-secondary text-xl text-white max-w-max hover:bg-primary">
      Get Started
    </button> */}
      </div>

      <div className="pb-10">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_rhe84poa.json"
          mode="bounce"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Intro;
