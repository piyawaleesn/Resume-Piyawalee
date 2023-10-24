import { projectDetails } from "../data/project.js";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import rightClick from "../assets/image/rightclick.png";
import githubGray from "../assets/image/githubgray.png";

function Project() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  return (
    <div className="flex flex-col items-center mb-[120px]  " id="Project">
      <div className="flex justify-center items-center mx-10 ">
        <h1
          className="text-[45px] font-semibold  text-center   "
          style={{
            background:
              "linear-gradient(45deg, hsl(0, 100%, 70%) , hsl(240, 100%, 70%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            width: "25%",
            minWidth: "220px",
          }}
        >
          Portfolio
        </h1>
      </div>

      <div
        className="flex flex-wrap justify-center items-center gap-x-[60px] gap-y-10 mx-10 mt-10 "
        style={{ maxWidth: "1000px" }}
      >
        {projectDetails.map((project, index) => (
          <div key={index}>
            <div className="card w-[450px] bg-base-100 border-slate-400 border-[1px] shadow-2xl transition-transform  hover:scale-[1.03]">
              <figure className="px-10 pt-10">
                <img
                  className="h-[200px] w-full"
                  src={project.picture}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body h-[300px] ">
                <h2 className="card-title">
                  {project.name}
                  {project.status === "Completed" ? (
                    <div className="badge bg-green-300 h-7  text-slate-800">
                      {project.status}
                    </div>
                  ) : (
                    <div className="badge bg-red-300 h-7 text-slate-800">
                      {project.status}
                    </div>
                  )}
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end mb-3 ">
                  {project.stack.map((stacks, index) => (
                    <div
                      className="badge badge-outline hover:bg-gray-300 cursor-pointer h-[25px]"
                      key={index}
                    >
                      {stacks}
                    </div>
                  ))}
                </div>
                <div className="flex fex-row justify-end items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button transform hover:scale-110 transition-transform"
                  >
                    <img
                      src={githubGray}
                      className="w-[20px] h-[20px]  mr-3  "
                      alt="github"
                    />
                  </a>
                  <button
                    onClick={() => setOpenModalIndex(index)}
                    className=" flex flex-row justify-end items-center  "
                  >
                    <img
                      src={rightClick}
                      className="w-auto h-[14px] mr-1"
                      alt="rightClick"
                    />
                    <span className="text-[#8564e1] hover:text-[#c0adf5] font-medium">
                      More details
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {openModalIndex === index && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20 w-screen h-screen">
                <div className="modal-box flex flex-col items-center justify-center rounded-2xl shadow-xl w-[700px] h-[800px] bg-base-300 mt-10">
                  <p className="font-noto-serif-display font-semibold text-[40px] text-green-600">
                    Success
                  </p>
                  <p className="py-4 font-bold text-[20px] text-center">
                    <h1>{project.name}</h1>
                  </p>
                  <ReactPlayer
                    width="100%"
                    height="auto"
                    controls={true}
                    url={project.vdo}
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload",
                        },
                      },
                    }}
                    defaultPlaybackRate={2}
                  />
                  <div className="modal-action">
                    <button
                      className="btn btn-primary bg-[#8564e1] hover:bg-[#c0adf5] hover:text-gray-800 mt-8"
                      onClick={() => {
                        setOpenModalIndex(null);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
