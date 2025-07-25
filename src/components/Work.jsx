import React from 'react';
import '../index.css'
import backGroungImg from '../assets/Screenshot.png';
import backGroungImg2 from '../assets/AvantCare.png';
import backGroungImg3 from '../assets/multi-step-form.jpg';

const Work = () => {

  
  return (
    <div name='work' className='w-full md:h-screen text-grey-300  bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
            <p className='py-6  text-white'>// Check out some of my recent work</p>
        </div>
        
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

         {/* grid item  */}
            <div style={{backgroundImage: `url(${backGroungImg})`}}  className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'>
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                       React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://first-class-travel-com.vercel.app/">Demo</a></button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://github.com/collinsErim21165/FirstClassTravel.com">Code</a></button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${backGroungImg2})`}} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'>
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                       React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> <a href='https://avant-care-center.vercel.app/'>Demo</a></button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href='https://github.com/collinsErim21165/Avant-Care'>Code</a></button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${backGroungImg3})`}} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'>
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                       React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href='https://multi-step-form-for-developers.vercel.app'>Demo</a></button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://github.com/collinsErim21165/Multi-step-form">Code</a></button>
                        </a>
                    </div>
                </div>
            </div>
           
        </div>

      </div>
    </div>
  )
}

export default Work