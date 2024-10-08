import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FormattedMessage } from "react-intl";
import Imagen1 from "../assets/perfil2.png";
 

const About = (props) => {
  const handleClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/gerson-mejia-8992aa218/";
  };
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="aboutl" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] bg-about2 bg-contain bg-no-repeat  mix-blend-lighten"
          >
           <img className="w-96" src={Imagen1} alt="imagem" />

          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">
              <FormattedMessage id="about.title" defaultMessage="ABOUT ME" />
            </h2>
            <h3 className="h3 mb-4">
              {" "}
              <FormattedMessage id="about.text" defaultMessage="I' am Freelancer Full Stack Developer with over 2 yeears of experience"/>
            </h3>
            <p className="mb-6">
              <FormattedMessage
                id="about.description"
                defaultMessage="I design and code beatiful simple thing and I ❤ what I do"
              />
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={2} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tacking-[2px]">
                  <FormattedMessage
                    id="about.experience"
                    defaultMessage="Years of Experience"
                  />
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={2} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tacking-[2px]">
                  <FormattedMessage id="about.project"
                  defaultMessage="Proyects Completed" />
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={2} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tacking-[2px]">
                  <FormattedMessage id="about.client" 
                  defaultMessage="Client Satisfied"/>
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button onClick={handleClick} className="btn btn-lg">
                <FormattedMessage id="contacte.button"
                defaultMessage="Contact me" />
              </button>
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
