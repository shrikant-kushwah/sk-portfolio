import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-500'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>Shrikant Kushwah</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Front-end developer.</h2>
        <p className='text-[#8892b0] py-4 max--w-[700px]'>I'm a Front-end developer specializing in building (and occaionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500'>View Work
          <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
