import React from 'react'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-[26px] md:text-4xl font-bold inline border-b-4 border-red-500'>Experience</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right '>
            <p className='text-2xl font-bold'>Combonation</p>
            <p className='text-lg'>Front End Developer</p>
            <p className='text-sm'>June 2023 - Present</p>
          </div>
          <div>
            <p className='text-[#8892b0]'>
              I am writing to express my interest in the Frontend Developer (React JS) role. and specializing in ReactJs.
            </p>
            <div className='text-sm py-2 text-[#8892b0]'>
              <p>
                I developed a high-performance e-commerce application for customers using React.js, React Hooks, React-Router, JavaScript, HTML5, CSS3, and Bootstrap5. I also designed custom components for a UX library, including Accordions, Filters, Dropdowns, Carousels, Buttons, Checkboxes, Inputs, and Icons. Additionally, I implemented and managed JWT tokens for secure authorization and authentication. My expertise extends to React state management strategies, including Redux and Redux Persist, and I exclusively used React Hooks to handle application lifecycle processes efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right py-2'>
            <p className='text-2xl font-bold'>Lets Grow More</p>
            <p className='text-lg'>Front End Web Developer Internship</p>
            <p className='text-sm'>April 2023 - Jun 2023 </p>
          </div>
          <div>
            <p>
              
            </p>
            <div className='text-sm py-4 text-[#8892b0]'>
              <p>
              Developed a high-performance e-commerce app with React.js, creating custom components and managing state with Redux and React Hooks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
