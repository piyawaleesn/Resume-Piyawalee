import Email from "../assets/image/email.png";
import Person from "../assets/image/person.png";
import Message from "../assets/image/message.png";
import GithubImage from "../assets/image/github2.png";
import LinkedinImage from "../assets/image/linkedin.svg";
import butterfly2 from "../assets/image/butterfly2.png";
function Footer() {
  return (
    <div id="Contact">
      <div className="flex flex-col  2xl:mx-36 xl:mx-36 lg:mx-10 md:mx-10   mt-10 max-[768px]:items-center   ">
        <div className="flex justify-center items-center mx-10 ">
          <h1
            className="text-[45px] font-semibold  text-center "
            style={{
              background:
                "linear-gradient(45deg, hsl(0, 100%, 70%) , hsl(240, 100%, 70%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              width: "25%",
              minWidth: "220px",
            }}
          >
            Contact
          </h1>
        </div>
        <div className="grid  2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1  max-[640px]:grid-cols-1 ">
          <div className="flex flex-col   2xl:mr-10 xl:mr-10 lg:mr-10 md:mr-10 ">
            <h1 className="mt-10 mb-6 text-3xl font-semibold text-[#8564e1] ">
              Get in Touch
            </h1>
            <form
              action="https://getform.io/f/c7d9e3db-595c-4bda-a0c0-8ea75f8d16f7"
              method="POST"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="form-control mb-6 ">
                <label className="input-group ">
                  <span style={{ minWidth: "56px" }}>
                    <img src={Person} className="h-6  w-auto " alt="persin" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered hover:border-[#8564e1]"
                    required
                    style={{ flex: 1, maxWidth: "400px", minWidth: "240px" }}
                  />
                </label>
              </div>
              <div className="form-control mb-6">
                <label className="input-group ">
                  <span style={{ minWidth: "56px" }}>
                    <img src={Email} className="h-6  w-auto " alt="email" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered hover:border-[#8564e1]"
                    required
                    style={{ flex: 1, maxWidth: "400px", minWidth: "240px" }}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group">
                  <span
                    className="flex flex-col align-center py-4 "
                    style={{ minWidth: "56px" }}
                  >
                    <img src={Message} className="h-7  w-auto " alt="message" />
                  </span>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    className="input input-bordered   h-[180px] py-4 hover:border-[#8564e1]"
                    required
                    style={{ flex: 1, maxWidth: "400px", minWidth: "240px" }}
                  ></textarea>
                </label>
              </div>
              <button
                className="btn btn-primary bg-[#8564e1] hover:bg-[#c0adf5] hover:text-gray-800 mt-8 mb-10 w-20"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className=" mb-10  " style={{ minWidth: "240px" }}>
            <div className=" w-[330px] relative">
              <h1 className="2xl:mt-10  xl:mt-10  lg:mt-10 md:mt-10  mb-[6px] text-2xl font-semibold text-[#8564e1] ">
                Address:{" "}
              </h1>
              <p className="text-lg font-base mb-5">
                Pornthip Apartment, Chalearnnakorn Soi 56 Samre, Khet Thon Buri,
                Bangkok, 10600
              </p>
              <div className="flex flex-row items-center mb-5">
                <h1 className=" mb-1 text-2xl mr-1 font-semibold text-[#8564e1]">
                  Tel:{" "}
                </h1>
                <p className="text-lg font-base ">087-407-0337</p>
              </div>
              <div className="flex flex-row items-center mb-5">
                <h1 className=" mb-1 text-2xl mr-1 font-semibold text-[#8564e1]">
                  Email:{" "}
                </h1>
                <p className="text-lg font-base ">Piyawaleenm@gmail.com</p>
              </div>
              <div className="flex flex-row ">
                <a
                  href="https://github.com/piyawaleesn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button transform hover:scale-110 transition-transform"
                >
                  <img
                    src={GithubImage}
                    className="w-[28px] mr-2 h-auto rounded"
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
                    className="w-[28px] h-auto rounded"
                    alt="linkedin"
                  />
                </a>
              </div>
              <img
                src={butterfly2}
                className="w-[80px] h-auto z-100 top-[200px] left-[280px] absolute"
                alt="butterfly"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300  h-16  text-lg font-base">
        <aside>
          <p>Copyright © 2023 - All right reserved </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
