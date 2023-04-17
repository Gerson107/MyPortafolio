import React from 'react';
import { motion } from 'framer-motion'

import { fadeIn} from '../variants'

//import Img1 from '../assets/portfolio-img1.png';
//import Img2 from '../assets/portfolio-img2.png';
//import Img3 from '../assets/portfolio-img3.png';

import Img1 from '../assets/mytinerary1.png';
import Img2 from '../assets/gpt2.png';
import Img3 from '../assets/mrwines1.png';



const Work = () => {

  return <section id='workt' className='section'>
    <div className='container h-auto mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-11'>
        <motion.div 
        variants={fadeIn('left', 0.2)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-light text-accent'>My latest <br/> 
            Work
            </h2>
            <p className='max-w-sm mb-16'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
            <button onClick={ () => {    window.location.href = 'https://github.com/Gerson107'}} className='btn btn-sm'>View all projects</button>
          </div>
          <div onClick={ () => {    window.location.href = 'https://mytinerary-l2gz.onrender.com/'}} className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            <div className='group-hover"bg-black/70 w-full h-full absolute z-40 transition-all duration-300' >
            </div>
            <img  className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='imagen1'/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Full Stack</span></div>
            <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Mytinerary</span>
            </div>
          </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('right', 0.2)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex-1 flex flex-col gap-y-10'>
          
          <div onClick={ () => {window.location.href = 'https://mrwines.onrender.com/'}}className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            <div className='group-hover"bg-black/70 w-full h-full absolute z-40 transition-all duration-300' >
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='imagen1'/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Full Stack</span></div>
            <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Mr.Wines</span>
            </div>
          </div>

          <div onClick={ () => {window.location.href = 'https://gpt-3v.netlify.app/'}}className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            <div className='group-hover"bg-black/70 w-full h-full absolute z-40 transition-all duration-300' >
            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='imagen1'/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'> Front End</span></div>
            <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>GPT-3</span>
            </div>
          </div>

          
          
          </motion.div>
        </div>
      </div>
  </section>;
};

export default Work;
