import React, { useEffect } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaSass,
  FaGit,
} from "react-icons/fa";
import AOS from "aos";
AOS.init({
  duration: 1000,
});
const Technologies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Technologies */}

      <div className="mt-20">
        <h1
          className="text-4xl text-primary font-bold text-center my-8 dark:text-third"
          data-aos="slide-up"
        >
          Technologies I USE
        </h1>
        {/* edit my grid to 2 col */}
        <div className="grid md:grid-cols-2 grid-cols-4">
          <FaHtml5
            size={150}
            color="orange"
            className="w-full text-center mt-20 animate-bounce"
          />
          <FaCss3
            size={150}
            color="blue"
            className="w-full text-center mt-20 animate-bounce"
          />
          <FaJsSquare
            size={150}
            color="orange"
            className="w-full text-center mt-20 animate-bounce"
          />
          <FaBootstrap
            size={150}
            color="blue"
            className="w-full text-center mt-20 animate-bounce"
          />
          <FaReact
            size={150}
            color="cyan"
            className="w-full text-center mt-20 animate-bounce"
          />
          <FaNodeJs
            size={150}
            color="green"
            className="w-full text-center mt-20 animate-bounce"
          />
          <FaSass
            size={150}
            color="red"
            className="w-full text-center mt-20 animate-bounce"
          />
          <FaGit
            size={150}
            color="black"
            className="w-full text-center mt-20 animate-bounce"
          />
        </div>
      </div>
      {/* {Javscript Buff} */}
      <div className="my-20">
        <div className="text-center h-52 bg-primary">
          <h1 className="text-white font-bold text-4xl py-10">Hey there 👋🏼</h1>
        </div>

        <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-secondary hover:text-white">
          <div className="h-96" data-aos="zoom-in">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            dignissimos expedita doloribus perferendis sit officia, voluptatibus
            odit nemo. In eaque dolorem explicabo laborum culpa dolore, est vel
            velit sed aperiam.
          </p>
        </div>
      </div>
      {/* {Dev stack section} */}
      <div className="my-20">
        <div className="text-center h-52 bg-primary">
          <h1 className="text-white font-bold text-4xl py-10">My DEV Stack</h1>
        </div>

        <div className="md:mx-5 mx-32 shadow-2xl bg-[#ffffff] -mt-20 rounded-lg hover:bg-secondary hover:text-primary-focus">
          <div className="h-96" data-aos="zoom-in">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="grid md:grid-cols-1 grid-cols-3 p-5">
            <div>
              <h1 className="text-xl font-bold">Front-End</h1>
              <hr />
              <p className="font-semibold mt-2">HTML/CSS</p>
              <p className="font-semibold mt-2">Javascript</p>
              <p className="font-semibold mt-2">React</p>
              <p className="font-semibold mt-2">Redux</p>
              <p className="font-semibold mt-2">jQuery</p>
            </div>

            <div className="text-center">
              <h1 className="text-xl font-bold">UI / UX</h1>
              <hr />
              <p className="font-semibold mt-2">Bootstrap</p>
              <p className="font-semibold mt-2">Tailwind</p>
              <p className="font-semibold mt-2">Material UI</p>
              <p className="font-semibold mt-2">Semantic UI</p>
            </div>

            <div className="text-right">
              <h1 className="text-xl font-bold">Back-End and DB</h1>
              <hr />
              <p className="font-semibold mt-2">Node JS</p>
              <p className="font-semibold mt-2">Express JS</p>
              <p className="font-semibold mt-2">Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
