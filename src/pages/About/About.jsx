import React from "react";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <>
        <div>
          <div>
            <div className="h-screen relative">
              <div className="h-3/4 pt-20 bg-primary">
                <h1 className="text-white text-center text-6xl">About Me</h1>
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_1cazwtnc.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
          {/* Dev Info */}

          <div>
            <h1 className="text-4xl text-primary text-center font-bold">
              Who is{" "}
              <span className="text-secondary uppercase">dev scorpion</span> ?
            </h1>

            <div className="h-screen relative text-primary">
              <div className="h-full">
                <lottie-player
                  src="https://assets10.lottiefiles.com/packages/lf20_gigyrcoy.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">
                  Hi , مرحبا ...
                  <hr />
                  <pre className="text-xl md:text-sm my-5  font-semibold">
                    {JSON.stringify(
                      {
                        name: "Scorpion",
                        age: null,
                        gender: "Male",
                        country: "Iraq",
                        Education: "B.Sc Computer Science",
                        Relationship: "😒",
                      },
                      null,
                      2
                    )}
                  </pre>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default index;
