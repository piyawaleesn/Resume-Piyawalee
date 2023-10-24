import Techstack from "./Techstack.jsx";
import profile from "../assets/image/profile.png";
import quoter from "../assets/image/quoter.png";
import quotel from "../assets/image/quotel.png";
import butterfly from "../assets/image/butterfly.png";
import "../App.css";

function Content() {
  return (
    <div className="flex flex-col" id="Content">
      <div className="grid  2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1  max-[640px]:grid-cols-1 2xl:mx-36 xl:mx-36 lg:mx-10 md:mx-10 mb-10  ">
        <div className="flex flex-col items-center mt-20  ">
          <div className="relative w-[260px] h-[347px] bg-red-200">
            <div className="bg-base-100 h-[290px] w-[245px]  z-10  top-[8px] left-[8px] absolute"></div>
            <img
              src={profile}
              className="h-[350px] w-auto   z-20 bottom-[0px] right-[18px] absolute"
              alt="Piyawalee"
            />
            <div
              style={{
                width: "260px",
                height: "347px",
                position: "absolute",
                top: "0px",
                left: "0px",
                background:
                  "linear-gradient(45deg, hsl(0, 100%, 70%) , hsl(240, 100%, 70%))",
              }}
            ></div>
            <img
              src={butterfly}
              className="h-[100px] w-auto   z-40 top-[250px] right-[200px] absolute"
              alt="butterfly"
            />
          </div>
        </div>
        <div className="flex flex-col items-start mt-20 sm:items-center  max-[640px]:items-center">
          <h1
            className="text-[45px] font-semibold   -mt-[20px] text-center mb-5"
            style={{
              background:
                "linear-gradient(45deg, hsl(0, 100%, 70%) , hsl(240, 100%, 70%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              minWidth: "220px",
            }}
          >
            About Me
          </h1>
          <div className="flex w-full  h-[288px] mt-2  justify-center items-center  relative  mx-10">
            <img
              src={quoter}
              className="h-[60px] w-auto z-10 bottom-[0px] right-[0px] absolute  "
              alt="quote-right"
            />
            <img
              src={quotel}
              className="h-[60px] w-auto z-10 top-[0px] left-[0px] absolute "
              alt="quote-left"
            />
            <p className="mx-10 text-center text-lg font-base z-20">
              I hold a degree in materials engineering and I am seeking a junior
              full stack developer position. I have skills in using tech stack
              such as React, Node.js, and Express I am always eager to learn new
              tools and continually develop my skills in various fields to work
              towards becoming a proficient full stack developer.
            </p>
          </div>
        </div>
      </div>
      <Techstack />
    </div>
  );
}

export default Content;
