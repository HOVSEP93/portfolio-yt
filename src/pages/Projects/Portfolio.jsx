import React from "react";
import projectsData from "../../resources/projects";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const Portfolio = () => {
  return (
    <>
      {/* My Work */}
      <div className="font-bold text-center bg-primary mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5 mt-20">
        <h1 className="text-8xl md:text-3xl" data-aos="slide-left">
          HERE WE GO!
        </h1>
        <h1 className="text-8xl md:text-3xl" data-aos="slide-right">
          PORTFOLIO
        </h1>
      </div>
      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
        {projectsData.map((project) => {
          return (
            <div key={project.id}>
              <div className="relative p-2 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-secondary object-cover		">
                <img
                  src={project.image}
                  className="w-full h-80 text-center "
                  alt="portfolio-img"
                />

                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl">
                  <h1 className="text-4xl font-semibold text-white">
                    {project.title}
                  </h1>
                  <div className="flex flex-row ">
                    <button className="border-2 rounded border-white py-2 hover:bg-green-500 mr-2 px-5 mt-5 text-white">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        DEMO
                      </a>
                    </button>
                    <button className="border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                  {/* <p className="text-xl font-semibold text-white">
                    {project.description}
                  </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
