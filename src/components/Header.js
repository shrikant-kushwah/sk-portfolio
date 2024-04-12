import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail, } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/sk-logo.png';

const Header = () => {
  
  const [header, setHeader] = useState(false);
  const handleHamburgerClick = () =>setHeader(!header);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='flex items-center'>
        <img className='w-16' src={Logo} alt="logo-img" />
        {/* <h1 className='mx-1 font-extrabold text-2xl text-red-500'>Shrikant</h1> */}
      </div>

      {/* Menu */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleHamburgerClick} className='md:hidden z-10'>
        {!header ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <div className={!header ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <ul>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/shrikant-kushwah-5bb1911b2/">Linkedin <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/shrikant-kushwah">Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F2]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/kushwa_shrikant">Twitter <FaTwitter size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b1]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="shrikant@20052001@gmail.com">Email <HiOutlineMail size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill size={30}/></a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header;
