import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-[24px] md:text-4xl font-bold inline border-b-4 border-red-500'>All About Me</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-xl md:text-3xl font-bold'>
            <p>Hi, I'm Shrikant Kushwah. Welcome! Feel free to explore and discover more about my work.</p>
          </div>
          <div>
            <p className='text-md'>
              {/* I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. what would you do if you had a software expert available at your fingertips? */}
              As a dedicated Frontend Developer specializing in React.js, I create dynamic and responsive web applications. With expertise in HTML, CSS, and JavaScript, I focus on delivering seamless user experiences with a keen eye for design and detail. I thrive in collaborative environments, constantly learning and adapting to industry trends. My goal is to write efficient, scalable code to ensure optimal performance and user satisfaction. Let’s work together to transform innovative ideas into exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
