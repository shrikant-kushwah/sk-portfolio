import React from 'react'
import { MdContactMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div name='contact' className='w-full h-auto bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5796288b-1ae3-4000-8b2a-a0fc86db4f4e" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-500 text-gray-300'>Contact</p>
            <span className='flex items-center'>
              <MdContactMail className='text-white hidden md:flex' size={20} />
              <p className='text-gray-300 py-4 mx-2'>Submit the form below or shoot me an email - shrikant20052001@gmail.com</p>
            </span>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
      <div className='w-full h-auto text-gray-600 bg-[#0a192f] py-8 px-8'>
        <div className='w-9/12 border-t-2 border-red-500 flex flex-wrap justify-between items-center py-4 ml-[12%] text-center text-sm font-extralight'>
        <p className='text-gray-300'>Copyright Calendly 2024</p>
        <p className='text-gray-300'>Created with <span className='text-lg'>❤️</span> By Shrikant Kushwah</p>
        <p className='text-gray-300'>Privacy / Terms and Conditions</p>
        </div>
      </div>
    </>
  )
};

export default Contact;
