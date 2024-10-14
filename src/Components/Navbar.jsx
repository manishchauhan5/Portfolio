import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Hacker from '../assets/Hacker.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="md:px-40">
        <div className="flex justify-between items-center max-w-screen-2xl container mx-auto px-3 pt-3">
          <div className="md:h-20 md:w-20 h-16 w-16 ml-2  rounded-full">
            <img src={Hacker} alt="logo" />
          </div>

          {/* For laptop */}
          <ul className="hidden md:flex items-center text-base gap-x-12">
            <li><Link to="Home" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer"><p className="hover:scale-105 duration-300">Home</p></Link></li>
            <li><Link to="About" spy={true} smooth={true} offset={0} duration={600} className="cursor-pointer"><p className="hover:scale-105 duration-300">About Me</p></Link></li>
            <li><Link to="Education" spy={true} smooth={true} offset={0} duration={700} className="cursor-pointer"><p className="hover:scale-105 duration-300">Education</p></Link></li>
            <li><Link to="Skills" spy={true} smooth={true} offset={0} duration={800} className="cursor-pointer"><p className="hover:scale-105 duration-300">Skills</p></Link></li>
            <li><Link to="Portfolio" spy={true} smooth={true} offset={0} duration={900} className="cursor-pointer"><p className="hover:scale-105 duration-300">Portfolio</p></Link></li>
          </ul>

          <Link to="Contact" spy={true} smooth={true} offset={0} duration={1000} className="cursor-pointer">
            <span className="hidden md:flex px-6 py-3 bg-gradient-to-r from-[#ffd104] to-[#e4096f] rounded-full text-lg cursor-pointer hover:scale-110 transition-transform duration-300">Contact with Me</span>
          </Link>

          {/* Toggle Button (Mobile) */}
          <div className="md:hidden block fixed right-[18px] z-40 cursor-pointer">
            {!menuOpen ? (
              <RiMenu3Fill size={36} onClick={toggleMenu} />
            ) : (
              <IoClose size={44} onClick={toggleMenu} />
            )}
          </div>
        </div>

        {/* For mobile */}
        <ul className={`md:hidden fixed flex top-0 pt-24 pl-14 w-[280px] h-full flex-col gap-6 text-xl bg-[#1f0016] transition-right duration-500 z-30 ${menuOpen ? 'right-0' : '-right-[280px]'}`}>
          <li><Link to="Home" spy={true} smooth={true} offset={-100} duration={700} className="cursor-pointer" onClick={toggleMenu}><p className="hover:scale-95 hover:text-orange-400 duration-300">Home</p></Link></li>
          <li><Link to="About" spy={true} smooth={true} offset={0} duration={700} className="cursor-pointer" onClick={toggleMenu}><p className="hover:scale-95 hover:text-orange-400 duration-300">About Me</p></Link></li>
          <li><Link to="Education" spy={true} smooth={true} offset={0} duration={700} className="cursor-pointer" onClick={toggleMenu}><p className="hover:scale-95 hover:text-orange-400 duration-300">Education</p></Link></li>
          <li><Link to="Skills" spy={true} smooth={true} offset={0} duration={700} className="cursor-pointer" onClick={toggleMenu}><p className="hover:scale-95 hover:text-orange-400 duration-300">Skills</p></Link></li>
          <li><Link to="Portfolio" spy={true} smooth={true} offset={0} duration={700} className="cursor-pointer" onClick={toggleMenu}><p className="hover:scale-95 hover:text-orange-400 duration-300">Portfolio</p></Link></li>
          <li><Link to="Contact" spy={true} smooth={true} offset={0} duration={700} className="cursor-pointer" onClick={toggleMenu}><p className="hover:scale-95 hover:text-orange-400 duration-300">Contact</p></Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
