import React from 'react'
import backGroungImg from '../assets/Landing-page.png';
import backGroungImg5 from '../assets/active.jpg';
import backGroungImg4 from '../assets/desktop-design.jpg';


const WorkTwo = () => {
  return (
    <div name='workTwo' className='w-full md:h-screen text-grey-300  bg-[#0a192f]  h-full  flex flex-col justify-center  mx-auto'>
   
     
      
      {/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-14  px-4  pt-20 md:pb-36 pb-28 '>

       {/* grid item  */}
          <div style={{backgroundImage: `url(${backGroungImg4})`}}  className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 '>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                     Html/Css Application
                  </span>
                  <div className='pt-8 text-center'>
                      <a href="/">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href='https://collinserim21165.github.io/loops-studio-landing-page/'>Demo</a></button>
                      </a>
                      <a href="/">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://github.com/collinsErim21165/loops-studio-landing-page"></a></button>
                      </a>
                  </div>
              </div>
          </div>
          <div style={{backgroundImage: `url(${backGroungImg5})`}} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 '>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                  Html/Css Application
                  </span>
                  <div className='pt-8 text-center'>
                      <a href="/">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://blogr-landing-page-zeta-puce.vercel.app/">Demo</a></button>
                      </a>
                      <a href="/">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://github.com/collinsErim21165/blogr-landing-page">Code</a></button>
                      </a>
                  </div>
              </div>
          </div>
          <div style={{backgroundImage: `url(${backGroungImg})`}}  className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div'>
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100 '>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                       React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://collinserim21165.github.io/Developer_Portfolio_Starter_Files/">Demo</a></button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><a href="https://github.com/collinsErim21165/Developer_Portfolio_Starter_Files"></a></button>
                        </a>
                    </div>
                </div>
            </div>
          
         
      </div>

    
  </div>
  )
}

export default WorkTwo