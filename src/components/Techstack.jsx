import { techStack } from "../data/skill.js";

function Techstack() {
  return (
    <div className="flex flex-col items-center  2xl:mx-36 xl:mx-36 lg:mx-10 sm:mx-10 max-[640px]:mx-10 mb-[120px]">
      <h1 className="text-2xl mr-1 font-semibold text-[#8564e1] mt-20">
        MY SKILLS
      </h1>
      <h1
        className="text-[45px] font-semibold mb-10 text-center "
        style={{
          background:
            "linear-gradient(45deg, hsl(0, 100%, 70%) , hsl(240, 100%, 70%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          minWidth: "220px",
        }}
      >
        Tech Stack & Tools
      </h1>
      <div
        className="flex flex-wrap justify-center gap-x-4 gap-y-10  "
        style={{ maxWidth: "1000px" }}
      >
        {techStack.map((technology) => (
          <div key={technology.name} className="group relative">
            <img
              className="w-[50px] h-[50px] mx-[20px] transform transition-transform duration-300 group-hover:scale-125"
              src={technology.icon}
              alt={technology.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
