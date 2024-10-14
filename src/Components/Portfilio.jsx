import React from 'react'
import Menu_photo from '../assets/Menu_photo.png'
import Cart_image from '../assets/Cart_image.png'
import Database_img from '../assets/Database_img.jpg'
import Weather from '../assets/Weather.png'
import Weather_app from '../assets/Weather_app.png'
import Project_img from '../assets/Project_img.png'

const Portfilio = () => {
  return (
    <>
    <div id="Portfolio" className="md:px-40 px-7 md:pt-6 pt-3 pb-4 md:justify-center md:items-center md:h-screen">
    {/* main container */}
     <div className="md:pt-0 pt-8">
        {/* header name */}
        <div className="flex flex-col items-center md:text-5xl text-2xl "><h1>My work</h1></div>
        <hr className="mt-3 md:mt-5 border-t-1.25 border-gray-700"/>
        {/* /content */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:mt-14 mt-8 md:gap-y-10 gap-y-4 gap-x-3">
            {/* boxes */}
            <div className="overflow-hidden border-2 md:border-4 rounded-xl border-orange-300"><img className="md:h-64 h-40 md:w-96 w-[350px] object-fill hover:scale-125 transition-transform duration-700" src={Menu_photo} alt="htmlcssjs"/></div>
            <div className="overflow-hidden border-2 md:border-4 rounded-xl border-orange-300"><img className="md:h-64 h-40 md:w-96 w-[350px] object-fill hover:scale-125 transition-transform duration-700" src={Cart_image} alt="htmlcssjs"/></div>
            <div className="overflow-hidden border-2 md:border-4 rounded-xl border-orange-300"><img className="md:h-64 h-40 md:w-96 w-[350px] object-fill hover:scale-125 transition-transform duration-700" src={Database_img} alt="htmlcssjs"/></div>
            <div className="overflow-hidden border-2 md:border-4 rounded-xl border-orange-300"><img className="md:h-64 h-40 md:w-96 w-[350px] object-fill hover:scale-125 transition-transform duration-700" src={Weather} alt="htmlcssjs"/></div>
            <div className="overflow-hidden border-2 md:border-4 rounded-xl border-orange-300"><img className="md:h-64 h-40 md:w-96 w-[350px] object-fill hover:scale-125 transition-transform duration-700" src={Weather_app} alt="htmlcssjs"/></div>
            <div className="overflow-hidden border-2 md:border-4 rounded-xl border-orange-300"><img className="md:h-64 h-40 md:w-96 w-[350px] object-fill hover:scale-125 transition-transform duration-700" src={Project_img} alt="htmlcssjs"/></div>
            {/* <div className="md:h-fit md:w-fit h-32 w-32 rounded-xl"><img className="rounded-xl hover:scale-105 transition-transform duration-600 border-4 border-orange-400" src={Project_img} alt="htmlcssjs"/></div> */}
        </div>
     </div>
    </div>
    </>
  )
}

export default Portfilio
