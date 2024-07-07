import React from 'react'
import { GrTechnology } from "react-icons/gr";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Postman from '../assets/postman.png';
import Node from '../assets/node.png';
import Redux from '../assets/redux.png';
import Bootstrap from '../assets/bootstrap.png';
import MySql from '../assets/mysql.png';
import BurpSuite from '../assets/BurpSuite.png';
import Trading from '../assets/trading.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-500'>My Technical Skills</p>
          <span className='flex items-center'>
          <GrTechnology />
          <p className='py-4 mx-2'>These are the technologies I have worked with</p>
          </span>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="html-icon" />
            <p className='py-4'>HTML</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="html-icon" />
            <p className='py-4'>CSS</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="html-icon" />
            <p className='py-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="html-icon" />
            <p className='py-4'>REACT</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Redux} alt="html-icon" />
            <p className='py-4'>REDUX</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="html-icon" />
            <p className='py-4'>TAILWINDCSS</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Bootstrap} alt="html-icon" />
            <p className='py-4'>BOOTSTRAP</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="html-icon" />
            <p className='py-4'>GITHUB</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Firebase} alt="html-icon" />
            <p className='py-4'>FIREBASE</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt="html-icon" />
            <p className='py-4'>AWS</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="html-icon" />
            <p className='py-4'>NODE JS</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="html-icon" />
            <p className='py-4'>MONGO DB</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Postman} alt="html-icon" />
            <p className='py-4'>POSTMAN</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MySql} alt="html-icon" />
            <p className='py-4'>MYSQL</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={BurpSuite} alt="html-icon" />
            <p className='py-4'>BURP SUITE</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Trading} alt="html-icon" />
            <p className='py-4'>TRADING</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
