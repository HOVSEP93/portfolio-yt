import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import Technologies from "./Technologies";
import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // console.log(darkMode);
  return (
    <Layout>
      <div className={darkMode ? "dark" : ""}>
        <div className="px-32 sm:px-2 dark:bg-forth">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="relative pt-10"
          >
            {darkMode ? (
              <FiSun className=" cursor-pointer text-2xl text-center z-10      text-zinc-400 " />
            ) : (
              <BsMoonStars className=" cursor-pointer text-2xl text-center  z-10  top-100 right-80" />
            )}
          </div>
          <Intro />
          <Technologies />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
