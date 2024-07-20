import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full  h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4 md:pt-28 pt-28 pb-20  '>
        <form method='POST' action="https://getform.io/f/akkgnvla" className='flex flex-col max-w-[600px]  w-full  h-screen mb-11'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - Collinserim72@gmail.com</p>
            </div>
            <input className='bg-[#616c8f] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#616c8f]'  type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center '>Let Collaborate</button>
        </form>
    </div>
  )
}

export default Contact