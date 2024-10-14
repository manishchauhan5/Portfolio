import React from 'react'

const About = () => {
  return (
    <>
    <div id="About" className="md:px-40 px-7 pt-3 md:pt-0 pb-3 md:pb-0 mt-0 md:mt-0 md:flex  md:items-center md:h-screen">
        <div className="pt-5 md:pt-0">
        <div className="flex flex-col items-center md:text-5xl text-2xl"><h1>About me</h1></div>
        <hr className="mt-3 md:mt-5 border-t-1.25 border-gray-700"/>

        <div className="text-justify md:mt-6 mt-8 md:text-lg text-sm leading-tight opacity-90"><p>I'm a Web Developer with a strong foundation in Front-end 
       and Back-end technologies. I recently graduated with a degree in Bachelor of Engineering from Pune University.
      where I developed skills in HTML, CSS, JavaScript, and frameworks like React for building 
      interactive user interfaces. I gained hands-on experience in Web development through various
      academic projects. Additionally, I have experience working with back-end technologies such as Node.js 
      and databases like MongoDB and SQL.</p>
      </div>
       <div className="md:text-justify md:mt-6 mt-4 md:text-lg text- leading-tight opacity-90"><p>I am passionate about creating responsive, user-friendly
       websites and am eager to learn and contribute to innovative web development projects.</p></div>

        <div className=" flex-col leading-6 md:text-lg text-base md:mt-12 mt-8 ">
            <div className="flex gap-x-5 items-center hover:scale-x-105 transition-transform duration-500"><p className="md:min-w-44 min-w-32 ">HTML & CSS</p><hr className="md:w-[55%] w-[35%] border-none rounded md:h-1.5 h-0.5 bg-gradient-to-r from-[#ffd104] to-[#e4096f] my-4"/></div>
            <div className="flex gap-x-5 items-center hover:scale-x-105 transition-transform duration-500"><p className="md:min-w-44 min-w-32 ">React Js</p><hr className="md:w-[75%] w-[55%] border-none rounded md:h-1.5 h-0.5 bg-gradient-to-r from-[#ffd104] to-[#e4096f] my-4"/></div>
            <div className="flex gap-x-5 items-center hover:scale-x-105 transition-transform duration-500"><p className="md:min-w-44 min-w-32 ">JavaScript</p><hr className="md:w-[65%] w-[45%] border-none rounded md:h-1.5 h-0.5 bg-gradient-to-r from-[#ffd104] to-[#e4096f] my-4"/></div>
            <div className="flex gap-x-5 items-center hover:scale-x-105 transition-transform duration-500"><p className="md:min-w-44 min-w-32 ">Node Js</p><hr className="md:w-[60%] w-[40%] border-none rounded md:h-1.5 h-0.5 bg-gradient-to-r from-[#ffd104] to-[#e4096f] my-4"/></div>
            <div className="flex gap-x-5 items-center hover:scale-x-105 transition-transform duration-500"><p className="md:min-w-44 min-w-32 ">MongoDB & SQL</p><hr className="md:w-[55%] w-[35%] border-none rounded md:h-1.5 h-0.5 bg-gradient-to-r from-[#ffd104] to-[#e4096f] my-4"/></div>
        </div>
        <div className="flex justify-between md:mt-16 mt-10 md:mx-20 ">
            <div className="text-center hover:scale-110 transition-transform duration-300">
                <h1 className="md:text-5xl text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-l from-[#ffd104] to-[#e4096f]">0.5</h1>
                <p className="md:text-lg text-xs md:mt-3 mt-1">YEARS OF EXPERIENCE</p>
            </div>
            <hr className="md:w-0.5 md:h-20 border-none rounded bg-white"/>
            <div className="text-center hover:scale-110 transition-transform duration-300">
                <h1 className="md:text-5xl text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-l from-[#ffd104] to-[#e4096f]">5+</h1>
                <p className="md:text-lg text-xs  md:mt-3 mt-1">PROJECTS COMPLETED</p>
            </div>
            <hr className="md:w-0.5 h-20 border-none rounded bg-white"/>
            <div className="text-center hover:scale-110 transition-transform duration-300">
                <h1 className="md:text-5xl text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-l from-[#ffd104] to-[#e4096f]">2+</h1>
                <p className="md:text-lg text-xs md:mt-3 mt-1">INTERNSHIPS COMPLETED</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About
