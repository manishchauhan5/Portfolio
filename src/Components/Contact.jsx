import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "903ea560-8aba-4209-b391-fc3bd7cb9a6e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <>
    <div id="Contact" className="md:px-40 px-7 md:pt-6 pt-3 pb-12 md:justify-center md:items-center md:h-screen ">
        <div className="pt-6">
        {/* title */}
        <div className="flex flex-col items-center md:text-5xl text-2xl "><h1>Contact Me</h1></div>
        <hr className="mt-3 md:mt-5 border-t-1.25 border-gray-700"/>
        {/*  */}
            <div className="md:flex pt-6 md:pt-8">
                {/* details */}
                <div className="md:w-2/5 md:mr-16">
                    <h1 className="text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400">Let's talk</h1>
                    <p className="text-justify pt-3 md:pt-5 leading-tight md:leading-normal opacity-90">I'm currently open to new opportunities and would love to hear about any exciting roles you have in mind. If you're looking for a passionate and skilled web developer, let's connect and explore how I can contribute to your team.</p>
                    <div className="pt-4 md:py-7 space-y-3 md:space-y-3">
                    <div className="flex items-center gap-2"><IoIosMail size={28}/><p>mkchauhan300@gmail.com</p></div>
                    <div className="flex items-center gap-2"><MdOutlineWifiCalling3 size={28}/><p>+917563086449</p></div>
                    <div className="flex items-center gap-2"><FaLocationDot size={28}/><p>Pune, Mahrastra</p></div>
                    </div>
                    {/* social media */}
                    <div className="pt-8 w-5/6">
                        <div className="flex justify-between pl-1">
                            <a href="https://www.linkedin.com/in/manish-chauhan-351058206/" className="flex flex-col items-center hover:scale-105"><SiLinkedin size={28}/><h6 className="text-sm">linkedin</h6></a>
                            <a href="https://github.com/manishchauhan5" className="flex flex-col items-center hover:scale-105"><FaGithub size={28}/><h6 className="text-sm">Github</h6></a>
                            <a href="https://www.instagram.com/manish_j4u/profilecard/?igsh=NGo4ZzFmcjY2ZHg2 " className="flex flex-col items-center hover:scale-105"><FaSquareInstagram size={28}/><h6 className="text-sm">Instagram</h6></a>
                        </div>
                    </div>
                </div>
                {/* form */}
                <form onSubmit={onSubmit} className="md:w-3/5 leading-8 md:leading-10 space-y-2 md:space-y-4 pt-8 md:pt-0">
                    <div>
                        Your Name
                        <input name="name" className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="name" type="text" placeholder="Enter your name"/>
                    </div>
                    <div>
                        Your Email
                        <input name="email" className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="email" type="email" placeholder="Enter your email"/>
                    </div>
                    <div>
                        Write your message here
                        <textarea name="message" className="shadow appearance-none border rounded w-full pt-3 px-3 text-gray-700 leading-tight focus:outline-none resize-none" id="messeges" rows="10" placeholder="Enter your message"/>
                    </div>
                    {/* submit */}
                    <div className="flex justify-center">
                    <input className="text-center w-36 md:w-44 md:px-10 px-6 md:py-4 py-3 bg-gradient-to-r from-[#ffd104] to-[#e4096f] rounded-full md:text-base text-sm cursor-pointer transform md:hover:scale-105 " type="submit"/>            
                    </div> 
                </form>
            </div>          
                       
        </div>
    </div>
    </>
  )
}

export default Contact
