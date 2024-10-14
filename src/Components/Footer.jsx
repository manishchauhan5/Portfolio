import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="md:px-40 px-7 md:pb-14 pb-6">
    <hr className="pt-6 border-t-2 border-white"/>
    <div className=" flex flex-col md:flex-row md:justify-between justify-center">
        <p className="text-sm md:text-base flex justify-center">© 2024 Manish Chauhan. All Rights reserved.</p>
        <div className=" flex flex-col md:flex-row md:justify-between md:space-x-10">
            <p className="text-sm md:text-base flex justify-center">Term of Services</p>
            <p className="text-sm md:text-base flex justify-center">Privacy Policy</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer
