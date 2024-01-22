import Typewriter from "typewriter-effect";
import piyawaleeProfile from "../assets/image/Piyawalee2.png";
import GithubImage from "../assets/image/github.svg";
import LinkedinImage from "../assets/image/linkedin.svg";

function Header() {
  return (
    <div
      className="flex flex-col justify-center items-center mt-16 relative "
      id="Header"
    >
      <div
        className="hero min-h-screen  bg-cover"
        style={{
          backgroundImage:
            "url(https://zmtcmuexuftdibplshxw.supabase.co/storage/v1/object/sign/Res/photo-1485470733090-0aae1788d5af.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJSZXMvcGhvdG8tMTQ4NTQ3MDczMzA5MC0wYWFlMTc4OGQ1YWYuanBnIiwiaWF0IjoxNjk3Mzg3NDUzLCJleHAiOjE3Mjg5MjM0NTN9.4tu-gP7YiWTWdvLOK_Voo3KkBJu1HeX0tqr1L3OPHmo&t=2023-10-15T16%3A30%3A53.743Z)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mx-10">
          <div className="max-w-md">
            <p className="mt-[140px] 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px]  sm:text-[25px]  max-[640px]:text-[25px] max-[560px]:text-[22px] max-[560px]:mt-[200px]  mb-3">
              Hello, My name is
            </p>
            <h1 className="mb-5  2xl:text-[45px] xl:text-[45px] lg:text-[45px] md:text-[45px]  sm:text-[45px]  max-[640px]:text-[45px] max-[470px]:text-[35px] font-semibold  ">
              Piyawalee Srisuwan
            </h1>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 500,
                color: "#fdd835",
              }}
            >
              <Typewriter
                options={{
                  strings: ["Full Stack Developer..."],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <a
              href="https://drive.google.com/file/d/1Fo4c6fWg8kZmg8F0V9GWGWQIKqSjGbj5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-[#8564e1] hover:bg-[#c0adf5] hover:text-gray-800 mt-8"
            >
              DOWLOAD RESUME
            </a>
            <div className="flex flex-row mt-6 justify-center items-center">
              <a
                href="https://github.com/piyawaleesn"
                target="_blank"
                rel="noopener noreferrer"
                className="button transform hover:scale-110 transition-transform"
              >
                <img
                  src={GithubImage}
                  className="w-[24px] mr-2 h-auto rounded"
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/piyawalee-srisuwan-bbab28265/"
                target="_blank"
                rel="noopener noreferrer"
                className="button transform hover:scale-110 transition-transform"
              >
                <img
                  src={LinkedinImage}
                  className="w-[24px] h-auto rounded"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-200 h-[210px] w-[210px] rounded-full z-10 absolute top-[58px]"></div>
      <img
        src={piyawaleeProfile}
        className="h-[200px]  w-auto rounded-full mt-[66px] z-20 absolute -top-[3px]"
        alt="Piyawalee"
      />

      <div
        style={{
          width: "221px",
          height: "221px",
          borderRadius: "100%",
          position: "absolute",
          top: "53px",
          background:
            "linear-gradient(45deg, hsl(0, 100%, 70%) , hsl(240, 100%, 70%)",
        }}
      ></div>
    </div>
  );
}

export default Header;
