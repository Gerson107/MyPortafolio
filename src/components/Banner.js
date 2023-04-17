import React from 'react';

//import Imagen1 from '../assets/fondpo1.png';
import Imagen1 from '../assets/fondo1.png';


import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Banner = (props) => {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/gerson-mejia-8992aa218/'
};
  return <section id='home' className='min-h-[85vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-left'>DANI <span>DEV</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='mb-76 text-[36px] lg:text-[60px]  font-secondary font-semibold uppercase leading-[1]'>
            <span className=' text-white mr-4'>I am a </span>
            <TypeAnimation sequence={[
              'Developer', 2000,
              'DevOps', 2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0' >
          Since I discovered my passion for programming I have not stopped learning.
          For that reason I have worked on front end projects as a backend and exploring DevOps Salesforce.
          </motion.p>
          <motion.div
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            {/* <Document file={props.file}>
              <Page pageNumber={1}/>
            </Document> */}
            <button onClick={handleClick} className='btn btn-lg'>Contact me</button>
            <a href={props.file} className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          <motion.div 
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='https://www.linkedin.com/in/gerson-mejia-8992aa218/'>
              <FaLinkedin/>
            </a>
            <a href='https://github.com/Gerson107'>
              <FaGithub/>
            </a>
            <a href='https://trailblazer.me/id/gmejia22'>
              <FaDribbble/>
            </a>
          </motion.div>
        </div>
        <motion.div 
       variants={fadeIn('down', 0.2)} 
       initial="hidden" 
       whileInView={'show'} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img  className='w-96' src={Imagen1} alt='imagem'/>
        </motion.div>
      </div>

    </div>

  </section>;
};

export default Banner;
