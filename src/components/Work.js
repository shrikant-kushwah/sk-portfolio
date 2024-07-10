import React from 'react'
import { data } from "../utils/data";
import { GiFireworkRocket } from "react-icons/gi";

const Work = () => {

  // project file
  const project = data;

  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-auto text-gray-300'>
      <div className='max-w-[1050px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-[28px] md:text-4xl font-bold text-gray-300 inline border-b-4 border-red-500'>
            My Creative Work Collection
          </p>
          <span className='flex items-center'>
            <GiFireworkRocket />
            <p className='py-2 mx-2'>Check out some of my recent work</p>
          </span>
        </div>

        {/* Container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {/* This is grid Item} */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >

              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  {item.name}
                  <p className='py-2 text-lg text-center text-red-500'>{item.projectName}</p>
                </span>
                <div className='pt-4 text-center'>
                  <a href={item.live}>
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700  font-bold text-lg'>Live</button>
                  </a>
                  <a href={item.github}>
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700  font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Work;
