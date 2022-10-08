import React, { useState } from "react";
// import Numbers from "./Numbers";
import Portfolio from "./Portfolio";
// import clients from "../../resources/Testimonial";

function Testimonials() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

  const clients = [
    {
      id: 1,
      logo: "./avatars/avatar-1.png",
      name: "testimony1",
      description:
        "Laborum tempor cupidatat commodo qui nulla magna non qui nulla ea non culpa nostrud. Amet irure proident voluptate nulla ex. Non eiusmod non sunt pariatur commodo in.",
    },
    {
      id: 2,
      logo: "./avatars/Kayane-Marry.png",
      name: "testimony2",
      description:
        "Laborum tempor cupidatat commodo qui nulla magna non qui nulla ea non culpa nostrud. Amet irure proident voluptate nulla ex.",
    },
    {
      id: 3,
      logo: "./avatars/avatar-1.png",
      name: "testimony3",
      description:
        "Laborum tempor cupidatat commodo qui nulla magna non qui nulla ea non culpa nostrud. Amet irure proident voluptate nulla ex.",
    },
    {
      id: 4,
      logo: "./avatars/avatar-2.png",
      name: "testimony4",
      description:
        "Laborum tempor cupidatat commodo qui nulla magna non qui nulla ea non culpa nostrud. Amet irure proident voluptate nulla ex.",
    },
    {
      id: 5,
      logo: "./avatars/avatar-3.png",
      name: "testimony5",
      description:
        "Laborum tempor cupidatat commodo qui nulla magna non qui nulla ea non culpa nostrud. Amet irure proident voluptate nulla ex.",
    },
  ];

  const next = () => {
    setSelectedClientIndex(selectedClientIndex + 1);
  };

  const previous = () => {
    setSelectedClientIndex(selectedClientIndex - 1);
  };

  return (
    <div>
      <div className="bg-primary h-44 rounded-b-full sm:rounded-b-2xl"></div>
      <div className="flex justify-center -mt-44 items-end space-x-10 sm:space-x-0 sm:p-5 overflow-x-hidden">
        {selectedClientIndex !== 0 && (
          <i
            className="ri-arrow-left-line text-4xl text-gray-600 cursor-pointer sm:hidden"
            onClick={previous}
          ></i>
        )}

        <div className="grid grid-cols-3 gap-10 sm:grid-cols-1 sm:gap-2">
          {[
            clients[selectedClientIndex],
            clients[selectedClientIndex + 1],
            clients[selectedClientIndex + 2],
          ].map((item) => (
            <>
              <div className="bg-white shadow p-5 w-[400px] sm:w-auto sm:h-auto border h-[350px]">
                <div
                  className="flex space-x-10 sm:space-x-0 items-center justify-between sm:flex-col"
                  key={item.id}
                >
                  <img
                    src={item.logo}
                    alt="testimony-img"
                    className="h-32 w-32 z-0 sm:w-10 sm:h-10"
                  />
                  <h1 className="text-primary font-semibold text-2xl">
                    {item.name}
                  </h1>
                </div>
                <p className="text-gray-600 text-md mt-10">
                  {item.description}
                </p>
              </div>
            </>
          ))}
        </div>

        {selectedClientIndex < 4 && (
          <i
            className="ri-arrow-right-line text-4xl text-gray-600 cursor-pointer sm:hidden"
            onClick={next}
          ></i>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex space-x-2">
          {[1, 2, 3].map((item, index) => (
            <div
              onClick={() => setSelectedClientIndex(index)}
              className={`bg-gray-200 h-4 w-4 rounded-full cursor-pointer hover:scale-105 transition-all transform duration-300 ${
                selectedClientIndex === index &&
                "border-2 border-secondary h-5 w-5"
              }`}
            ></div>
          ))}
        </div>
      </div>
      {/* Numbers */}

      {/* <Numbers /> */}
      {/* My Work */}

      <Portfolio />
    </div>
  );
}

export default Testimonials;
