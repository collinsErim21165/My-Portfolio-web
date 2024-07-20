import React from 'react';
import HTML from '../assets/png-clipart.png';
import CSS from '../assets/css3.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react-logo.png';
import firebase from '../assets/firebase-logo.png';
import github from '../assets/github-logo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#0a192f]' >
        {/* container */}
       <div className='max-w-[1000px1] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
             <p className='text-4xl text-gray-300 py-4 font-bold inline border-b-4  border-pink-600'>Skills</p>
             <p className='py-4 text-white'>// These are the technologies i've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className="w-20 mx-auto rounded-lg" src={HTML}  alt="" />
               <p className='text-white my-4'>HTML</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className="w-20 mx-auto rounded-lg" src={CSS}  alt="" />
               <p className='text-white my-4'>CSS</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className="w-20 mx-auto " src={javascript}  alt="" />
               <p className='text-white my-4'>Javascript</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className="w-20 mx-auto " src={react}  alt="" />
               <p className='text-white my-4'>React Js</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className="w-20 mx-auto rounded-3xl" src={firebase}  alt="" />
               <p className='text-white my-4'>Firebase</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <img className="w-20 mx-auto rounded-3xl" src={github}  alt="" />
               <p className='text-white my-4'>GitHub</p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Skills