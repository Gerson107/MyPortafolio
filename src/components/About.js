import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const About = (props) => {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/gerson-mejia-8992aa218/'
};
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return(
  <section 
  id='aboutl' 
  className='section'
  ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3 }}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] bg-about2 bg-contain bg-no-repeat h-[750px] mix-blend-lighten'>
        
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3 }}
          className='flex-1' >
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I' am Freelancer Full Stack Developer with over 2 yeears of experience</h3>
        <p className='mb-6'>
I design and code beatiful simple thing and I  what  I do</p>
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={2} duration={4}/> : null}
            k+
          </div>
          <div className='font-primary text-sm tacking-[2px]'>
            Years of <br/>
            Experience
          </div>
          </div>

          <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={15} duration={3}/> : null}
            k+
          </div>
          <div className='font-primary text-sm tacking-[2px]'>
            Projects <br/>
            Completed
          </div>
          </div>

          <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {inView ? <CountUp start={0} end={10} duration={3}/> : null}
          k+
          </div>
          <div className='font-primary text-sm tacking-[2px]'>
             Satisfaied<br/>
            Clients
          </div>
          </div>
        </div>
        <div className='flex gap-x-8 items-center'>
          <button onClick={handleClick}className='btn btn-lg'> Contact me</button>
          <a href={props.file} className='text-gradient btn-link'>My Portfolio</a>
        </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default About;
