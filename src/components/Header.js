import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail, } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/shrikant-logo1.png';
import { Link } from 'react-scroll';

const Header = () => {

  const [header, setHeader] = useState(false);
  const handleHamburgerClick = () => setHeader(!header);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='flex items-center'>
        <img className='w-48' src={Logo} alt="logo-img" />
        {/* <h1 className='mx-1 font-extrabold text-2xl text-red-500'>SHRIKANT</h1> */}
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li><Link to='experience' smooth={true} duration={500}>Experience</Link></li>
        <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
        {/* <li><Link to='service' smooth={true} duration={500}>Service</Link></li> */}
        <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleHamburgerClick} className='md:hidden z-10'>
        {!header ? <FaBars size={24}/> : <FaTimes size={24} />}
      </div>

      {/* Mobile menu */}
      <div className={!header ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-6 text-4xl'><Link onClick={handleHamburgerClick} to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleHamburgerClick} to='about' smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleHamburgerClick} to='experience' smooth={true} duration={500}>Experience</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleHamburgerClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleHamburgerClick} to='work' smooth={true} duration={500}>Work</Link></li>
          {/* <li className='py-6 text-4xl'><Link onClick={handleHamburgerClick} to='work' smooth={true} duration={500}>Service</Link></li> */}
          <li className='py-6 text-4xl'><Link onClick={handleHamburgerClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/shrikant-kushwah-5bb1911b2/">Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/shrikant-kushwah">Github <FaGithub size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F9]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/kushwa_shrikant">Twitter <FaTwitter size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b1]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:shrikant@20052001@gmail.com">Email <HiOutlineMail size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1frQci8tTonoe0deiiLI_rljOdBMDLdjV/view?usp=sharing">Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header;
