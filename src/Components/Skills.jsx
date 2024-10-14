import React from 'react'
import Htmlcssjs from '../assets/Htmlcssjs.png'
import React_img from '../assets/React_img.svg'
import Node_img from '../assets/Node_img.svg'
import MongoDB_img from '../assets/MongoDB_img.svg'
import Sql from '../assets/Sql.png'
import Cplusplus_img from '../assets/Cplusplus_img.svg'
import Vite_img from '../assets/Vite_img.svg'
import Figma_img from '../assets/Figma_img.svg'

const Skills = () => {
  return (
    <>
    <div id="Skills" className="md:px-40 px-7 md:pt-6 pt-3 pb-3 md:justify-center md:items-center md:h-screen">
    {/* container */}
    <div className="md:pt-0 pt-8 pb-2">
    <div className="flex flex-col items-center md:text-5xl text-2xl "><h1>Skills</h1></div>
    <hr className="mt-3 md:mt-5 border-t-1.25 border-gray-700"/>
    {/* content */}
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center md:mt-14 mt-8 gap-y-10">

        {/* html css javaScript */}
        <div className=" rounded-xl overflow-hidden"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={Htmlcssjs} alt="htmlcssjs"/></div>

        {/* React */}
        <div className=" rounded-xl"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={React_img} alt="React image"/></div>

        {/* Node */}
        <div className="rounded-xl"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={Node_img} alt="Nodejs image"/></div>

        {/* MongoDB */}
        <div className="rounded-xl"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={MongoDB_img} alt=" Mongodb image"/></div>

        {/* SQL */}
        <div className="rounded-xl overflow-hidden"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={Sql} alt=" Sql image"/></div>

        {/* C++ */}
        <div className="rounded-xl"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={Cplusplus_img} alt="C++ image"/></div>

        {/* Vite */}
        <div className="rounded-xl"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={Vite_img} alt=" vite react image"/></div>

        {/* Figma */}
        <div className="rounded-xl"><img className="md:h-64 md:w-64 h-32 w-32 rounded-xl hover:scale-105 transition-transform duration-600" src={Figma_img} alt=" figma image"/></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Skills
