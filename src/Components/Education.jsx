import React from 'react'
import Sinhgad_college from '../assets/Sinhgad_college.png'
import Dav_college from '../assets/Dav_college.png'
import Imperial_school1 from '../assets/Imperial_school1.png'

const Education = () => {
  return (
    <>  
    <div id="Education" className="md:px-40 px-7 pt-3 md:pt-0 pb-3 md:pb-0 md:flex md:justify-center md:items-center md:h-screen">
      <div className="pt-8 md:pt-0">
        {/* title */}
      <div className="text-center md:text-5xl text-2xl ">Education</div>
      <hr className="mt-3 md:mt-5 border-t-1.25 border-gray-700"/>
         {/* container */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-5 my-5 md:my-6">

          {/* Engineering */}
          <div className="hover:scale-105 transition-transform duration-600">
          <div className="w-60 h-72 md:w-96 md:h-96 bg-gradient-to-b from-[#ffffff] to-[#f2cc97] md:mt-14 mt-8 rounded-2xl p-2 md:p-4 text-black">
          <div className="flex flex-col text-center items-center">
          <div className="md:text-3xl text-lg mt-3 md:mt-4 font-serif font-semibold">Engineering</div>
          <div className="md:h-42 md:w-52 pt-3 md:pt-6 h-30 w-36 ">
            <img className="object-contain" src={Sinhgad_college} alt=""/>
            </div>
          <div className="md:text-lg md:mt-1">SIT Lonavala</div>
            <div className="md:text-lg">BE-Computer Engineering | SPPU</div>
            <div className="md:text-lg">CGPA: 7.45</div>
            <div className="md:text-lg">2020-2024</div>
          </div>
          </div>
          </div> 

          {/* 12th */}
          <div>
          <div className="hover:scale-105 transition-transform duration-600">
          <div className="w-60 h-72 md:w-96 md:h-96 bg-gradient-to-b from-[#ffffff] to-[#94c1cf] md:mt-14 mt-8 rounded-2xl p-2 md:p-4 text-black">
          <div className="flex flex-col text-center items-center">
          <div className="md:text-3xl text-lg mt-3 md:mt-4 font-serif font-semibold">12th</div>
          <div className="md:h-44 md:w-44 pt-2 h-32 w-32 ">
            <img className="object-contain" src={Dav_college} alt=""/>
            </div>
          <div className="md:text-lg">DAV PG COLLEGE, Siwan</div>
            <div className="md:text-lg">HSC | Bihar Board</div>
            <div className="md:text-lg">Percentage: 70%</div>
            <div className="md:text-lg">2019</div>
          </div>
          </div>
          </div>
          </div>

          {/* 10th */}
          <div>
          <div className="hover:scale-105 transition-transform duration-600">
          <div className="w-60 h-72 md:w-96 md:h-96 bg-gradient-to-b from-[#ffffff] to-[#82ef92] md:mt-14 mt-8 rounded-2xl p-2 md:p-4 text-black">
          <div className="flex flex-col text-center items-center">
          <div className="md:text-3xl text-lg mt-3 md:mt-4 font-serif font-semibold">10th</div>
          <div className="md:h-40 md:w-40 md:pt-4 pt-2 h-32 w-32 ">
            <img className="object-contain" src={Imperial_school1} alt=""/>
            </div>
            <div className="md:text-lg md:pt-4 mt-2">Imperial Public Schol, Hathwa</div>
            <div className="md:text-lg">SSC | CBSE</div>
            <div className="md:text-lg">CGPA: 9.2</div>
            <div className="md:text-lg">2017</div>
          </div>
          </div>
          </div>
          </div>
        </div>
        </div>
    </div>  
    </>
  )
}

export default Education



