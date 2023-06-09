import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleForm = (event) => {
    event.preventDefault();
    if (input1 === '' || input2 === '' || input3 === '') {
      Swal.fire({ icon: 'error', title: 'Please fill in all the fields', text: 'Thank You!', timer: 3000 })
    } else {
      Swal.fire({ icon: 'success', title: 'I received your message', text: 'Thank You!', timer: 3000 })
    }
  }
  const handleSubmi = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_s1qhkop', 'template_58te94l', event.target, 'rdyk80SQr6FM8nB88')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  return <section id='contactt' className='py-16 lg:section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
              <FormattedMessage
                id="contact.title" /></h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12' ><FormattedMessage
              id="contact.subtitle" /></h2>
          </div>
        </motion.div>
        <motion.form
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1 border rounded flex flex-col gap-y-6 pb-24 p-6 items-start'
          onSubmit={handleSubmi}>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-while focus:border-accent transition-all' type='text' placeholder='Your Name' name='user_name' onChange={(e) => setInput1(e.target.value)} />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-while focus:border-accent transition-all' type='email' placeholder='Your Email' name='user_email' onChange={(e) => setInput2(e.target.value)} />
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-while focus:border-accent transition-all resize-none mb-12' type='text' placeholder='Your message' name="user_message" onChange={(e) => setInput3(e.target.value)} ></textarea>
          <button type="submit" className='btn btn-lg' onClick={handleForm} ><FormattedMessage
            id="contact.button" /></button>
        </motion.form>


      </div>
    </div>
  </section>;
};

export default Contact;
