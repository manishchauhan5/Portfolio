import React from 'react'
import profile from '../assets/profile.png'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
    <div  id="Home" className="md:px-40 px-7 pb-8 pt-7 md:pt-0 md:pb-5">
      {/* container */}
    <div className="flex flex-col items-center justify-center">

    <div className="md:h-60 md:w-60 h-44 w-44 pt-8"><img src={profile} alt=""/></div>
      <h3 className="md:text-2xl text-base mt-8 md:mt-5 md:mb-0 mb-2 pt-8">Hello, Its Me</h3>
      <div className="flex justify-center md:w-9/12 text-center ">
      <h1 className="md:text-7xl text-4xl my-3 font-semibold w-10/12"><span className="my-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 ">Manish chauhan,</span> i'm web developer</h1>
      </div>
      <p className="text-center my-4 opacity-90 md:text-xl text-sm ">With a passion for developing modern web application and creating responsive user-friendly websites.
      </p>

        <div className="flex md:gap-x-12 gap-x-4 mt-3">
        <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={700} className="hover:underline cursor-pointer">
      <div className=" md:px-10 px-6 md:py-4 py-3 bg-gradient-to-r from-[#ffd104] to-[#e4096f] rounded-full md:text-base text-sm cursor-pointer transform md:hover:scale-105 hover:border-2 border-gray-50"><button>For More</button></div>
      </Link>
      <div className="md:px-10 px-6 md:py-4 py-3 border-2 border-gray-50 rounded-full md:text-base text-sm cursor-pointer hover:border-[#ff8d46]"><button>My Resume</button></div>
            
       </div>
       </div>
    </div>
    </>
  )
}

export default Home

