import React from "react";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/mytinerary1.png";
import Img2 from "../assets/gpt2.png";
import Img3 from "../assets/festmusic.png";
import Img4 from "../assets/blogdecafe.png";
import Img5 from "../assets/funamsine.png";


const Work = () => {
  return (
    <section id="workt" className="section lg:my-48">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col gap-y-20 pb-32"
          >
            <div>
              <h2 className="h2 leading-light text-accent">
                <FormattedMessage
                  id="work.title"
                  defaultMessage="MY LATEST WORK"
                />
              </h2>
              <p className="max-w-sm mb-16">
                <FormattedMessage
                  id="work.description"
                  defaultMessage="These are some of the projects I have worked on"
                />{" "}
              </p>
              <button
                onClick={() => {
                  window.location.href = "https://github.com/Gerson107";
                }}
                className="btn btn-sm"
              >
                <FormattedMessage
                  id="work.button"
                  defaultMessage="View all Pojects"
                />
              </button>
            </div>
            <div
              onClick={() => {
                window.location.href = "https://mytinerary-383s.onrender.com/";
              }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 max-w-md cursor-pointer"
            >
              <img
                className="group-hover:scale-125 transition-all duration-500 max-w-md"
                src={Img1}
                alt="imagen1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">FullStack</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-while">Mytinerary</span>
              </div>
            </div>

            <div
              onClick={() => {
                window.location.href = "https://festmusic.netlify.app/";
              }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 max-w-md cursor-pointer mb-10"
            >
              <div className='group-hover"bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 max-w-md"
                src={Img3}
                alt="imagen1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">FrontEnd</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-while">Fest Music</span>
              </div>
            </div>
            
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2}}
            className="flex-1 flex flex-col gap-y-20 pb-32"
          >
            <div
              onClick={() => {
                window.location.href = "https://blogdcfe.netlify.app/";
              }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 max-w-md cursor-pointer"
            >
              <div className='group-hover"bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 max-w-md"
                src={Img4}
                alt="imagen1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">FrontEnd</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-black">Blog de Cafe</span>
              </div>
            </div>

            <div
              onClick={() => {
                window.location.href = "https://funamsine.org/";
              }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 max-w-md cursor-pointer"
            >
              <div className='group-hover"bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 max-w-md"
                src={Img5}
                alt="imagen1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">FullStack</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-while">Funamsine</span>
              </div>
            </div>

            <div
              onClick={() => {
                window.location.href = "https://gpt-3v.netlify.app/";
              }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 max-w-md cursor-pointer"
            >
              <div className='group-hover"bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 max-w-md"
                src={Img2}
                alt="imagen1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> FrontEnd</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-while">GPT-3</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
