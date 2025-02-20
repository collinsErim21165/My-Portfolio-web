import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/images.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
         <img src={Logo} className='h-10 w-[50px] shadow-lg rounded' alt="" />
      </div>
      <div>

        {/* Menu */}
        <ul className='hidden md:flex '>
            <li> <Link to="home"  smooth={true} duration={500} > Home</Link> </li>
            <li><Link to="about"  smooth={true} duration={500} > About</Link></li>
            <li><Link to="skills"  smooth={true} duration={500} > Skills</Link></li>
            <li><Link to="work"  smooth={true} duration={500} > Work-Section1</Link></li>
            <li><Link to="workTwo"  smooth={true} duration={500} >work-Section2</Link></li>
            <li><Link to="contact"  smooth={true} duration={500} > Contact</Link></li>
        </ul>
       

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden flex z-10 '>
            {!nav ? <FaBars /> : <FaTimes className='z-50 '  />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link to="home"  smooth={true} duration={500} > Home</Link></li>
            <li className='py-6 text-4xl'><Link to="about"  smooth={true} duration={500} > About</Link></li>
            <li className='py-6 text-4xl'><Link to="skills"  smooth={true} duration={500} > Skills</Link></li>
            <li className='py-6 text-4xl'><Link to="work"  smooth={true} duration={500} > Work-Section1</Link></li>
            <li className='py-6 text-4xl'><Link to="workTwo"  smooth={true} duration={500} >work-Section2</Link></li>
            <li className='py-6 text-4xl'><Link to="contact"  smooth={true} duration={500} > Contact</Link></li>
        </ul>

        {/* Social icons */}
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           <ul>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="">Linkedin <FaLinkedin size={30}/></a>
             </li>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="">Github <FaGithub size={30}/></a>
             </li>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                <a className='flex justify-between items-center w-full text-gray-300' href="">Email <HiOutlineMail size={30}/></a>
             </li>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="">Resume <BsFillPersonLinesFill size={30}/></a>
             </li>
           </ul>
         </div>
      </div>


    </div>
  )
}

export default Navbar