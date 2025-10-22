import { useState } from "react";
import TabNavigation from "./Components/TabNavigation";
import "./App.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiUser, HiPhone, HiLocationMarker, HiShare } from "react-icons/hi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="gap-2 flex">
          <div className="bg-white border border-gray-200 z-10 rounded-2xl w-1/4 h-[95vh] p-5">
            <div className="flex flex-col items-center">
              <img src="" alt="" className="bg-gray-200 h-40 w-40 rounded-xl" />
              <h1 className="mt-2 font-extrabold">LESTER GODWIN SALEM</h1>
              <p className="">Full-Stack Web Developer</p>
              <p className="flex items-center gap-1">
                <HiLocationMarker className="w-4 h-4" />
                Calatrava, 6126
              </p>
            </div>
            <div className="mt-4 gap-x-2">
              <div className="mt-10">
                <h1 className="font-bold flex items-center gap-2">
                  <HiUser className="w-4 h-4" />
                  About Me
                </h1>
                <p>
                  A passionate and dedicated web developer offering quality web
                  solutions and services in a Rapid Application Development
                  Setting
                </p>
              </div>
              <div className="mt-4">
                <h1 className="font-bold flex items-center gap-2">
                  <HiPhone className="w-4 h-4" /> Contact Details
                </h1>
                <p>Email: lesterdevprogrammer@gmail.com </p>
                <p>Phone: (+63)9457422924</p>
              </div>
              <div className="mt-4">
                <h1 className="font-extrabold flex items-center gap-2">
                  <HiShare className="w-4 h-4" />
                  Socials
                </h1>
                <div className="flex gap-2 my-2">
                  <p
                    className="relative overflow-hidden transition duration-400 text-black font-bold text-sm rounded-md p-1 flex items-center gap-1
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-black before:z-0 before:transition-all before:duration-400
              hover:before:w-full hover:text-white"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      <FaLinkedin />
                      LinkedIn
                    </span>
                  </p>

                  <p
                    className="relative overflow-hidden transition duration-400 text-black font-bold text-sm rounded-md p-1 flex items-center gap-1
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-black before:z-0 before:transition-all before:duration-400
              hover:before:w-full hover:text-white"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      <FaGithub />
                      Github
                    </span>
                  </p>

                  <p
                    className="relative overflow-hidden transition duration-400 text-black font-bold text-sm rounded-md p-1 flex items-center gap-1
              before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-black before:z-0 before:transition-all before:duration-400
              hover:before:w-full hover:text-white"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      <FaInstagram />
                      Instagram
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-t flex justify-center text-xs mt-2">
                <div className="flex gap-2 mt-2">
                  <button className="border rounded-md p-1 bg-black text-white font-semibold transform hover:scale-102 transition duration-300 hover:translate-y-1">
                    View Projects
                  </button>
                  <button className="border rounded-md p-1 bg-white text-black font-semibold transform hover:scale-102 transition duration-300 hover:translate-y-1">
                    View Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-[0.5px] border-gray-200 z-10 rounded-2xl w-3/4">
            <div>
              <TabNavigation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
