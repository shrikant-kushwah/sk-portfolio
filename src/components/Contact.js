import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactImage from '../assets/portfolio-contact.png'
// import { MdContactMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div name='contact' className='w-full h-screen bg-[#0a192f] flex flex-col md:flex-row justify-evenly items-center p-4'>
        <div className='text-gray-300 w-auto h-auto'>
          <h1 className='text-2xl md:text-4xl font-bold text-gray-300 py-4 md:w-44'>Let's work together</h1>
          <div className='py-2'>
            <h2 className='text-lg font-semibold'>Mail</h2>
            <span className='text-sm'>shrikant20052001@gmail.com</span>
          </div>
          <div className='py-2'>
            <h2 className='text-lg font-semibold'>Address</h2>
            <span className='text-sm'>Current location: New Delhi</span>
          </div>
          <div className='py-2'>
            <h2 className='text-lg font-semibold'>Phone</h2>
            <span className='text-sm'>+919929897437</span>
          </div>
        </div>
        <div className='w-auto h-auto'>
          <img className='w-[250px]' src={ContactImage} alt="contactImage" />
          {/* <form method='POST' action="https://getform.io/f/5796288b-1ae3-4000-8b2a-a0fc86db4f4e" className='flex flex-col w-[400px] gap-4 text-white'>
            <input className='bg-transparent border border-b-white rounded-sm p-2' type="text" required placeholder='Name' />
            <input className='bg-transparent border border-b-white rounded-sm p-2' type="email" required placeholder='Email' />
            <textarea className='bg-transparent border border-b-white rounded-sm p-2' rows={8} placeholder='Message'/>
            <button className='text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-2 my-1 mx-auto flex items-center'>Let's Collaborate</button>
          </form> */}
          {/* <form method='POST' action="https://getform.io/f/5796288b-1ae3-4000-8b2a-a0fc86db4f4e" className='flex flex-col max-w-[500px] w-full'>
            <div className='pb-4'>
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
          </form> */}
        </div>
      </div>
      <div className='w-full h-auto text-gray-600 bg-[#0a192f]'>
        <ul className='md:hidden flex justify-center items-center'>
          <li className='flex justify-between items-center  duration-300 bg-[#0a66c2] border border-[#0a66c2] w-12 h-12 rounded-full mx-2'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/shrikant-kushwah-5bb1911b2/"> <FaLinkedin size={30} /></a>
          </li>
          <li className=' flex justify-between items-center duration-300 bg-[#333333] border border-[#333333] w-12 h-12 rounded-full mx-2'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/shrikant-kushwah"> <FaGithub size={30} /></a>
          </li>
          <li className=' flex justify-between items-center duration-300 bg-[#1DA1F9] border border-[#1DA1F9] w-12 h-12 rounded-full mx-2'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/kushwa_shrikant"> <FaTwitter size={30} /></a>
          </li>
        </ul>
        <div className='w-full flex justify-center items-center py-2 text-center font-extralight'>
          <p className='w-full text-gray-500 border-t-2 border-gray-800 text-[13px] md:text-[15px] py-2'>Designed and build by Shrikant Kushwah | All rights reserved</p>
        </div>
      </div>
    </>
  )
};

export default Contact;
