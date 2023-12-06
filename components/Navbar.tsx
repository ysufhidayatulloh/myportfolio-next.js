import React, { useRef, useState } from 'react';
import Home from '../pages/index';
import Link from 'next/link';
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
// import Image from 'next/image';
// import {logo} from '@/public/assets';

const Navbar = () => {

  const ref = useRef<string|any> ("");
  const [showMenu,setShowMenu]= useState(false);
  const handleScroll =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setShowMenu(false);
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      const elem =document.getElementById(targetId)
      elem?.scrollIntoView({
        behavior: "smooth",
      });
      // update the class name of the clicked link
      const links = document.querySelectorAll(".nav-link")
      links.forEach((link)=>{
        link.classList.remove("active")
      });
      e.currentTarget.classList.add("active");
    };

    function handlClick(e:any){
      if(e.target.contains(ref.current)){
        setShowMenu(false);
      }
    }

  return (
    <div className="w-full h-20 shadow-navbarShadow lg:h-[9vh] sticky top-0 z-50 bg-bodyColor px-10">
        <div className="flex items-center justify-between h-full py-1 max-w-container max-auto font-titleFont">
            <motion.div 
                initial={{y: -10, opacity:0 }}
                animate={{ y: 0, opacity:1 }}
                transition={{ duration:0.1 }}
            > 
            <div>
            <Link 
                  href=""
                  className="flex items-center self-center gap-1 text-2xl italic duration-300 cursor-pointer font-bodyFont text-textLight hover:text-textGreen nav-link"
                >                 
                <span className="text-textGreen">My</span>
                Portfolio.
            </Link>
            </div>
            </motion.div>
            <div className="items-center justify-between hidden gap-5 mdl:inline-flex w-[68%]">
            <ul className="flex items-center justify-between text-[15px] gap-7 ">
                <Link
                  onClick={handleScroll} 
                  href="#home"
                  className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                >
                   <motion.li
                   initial={{ y: -10, opacity:0 }}
                   animate={{ y: 0, opacity:1 }}
                   transition={{ duration:0.1 }}
                   >
                    Home
                   </motion.li>
                </Link>
                
                <Link 
                  onClick={handleScroll} 
                  href="#about"
                  className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                >
                  <motion.li
                  initial={{ y: -10, opacity:0 }}
                  animate={{ y: 0, opacity:1 }}
                  transition={{ duration:0.1, delay:0.1 }}
                  >
                   <span className="text-textGreen">01.</span>
                   About
                  </motion.li>
                </Link>
                
                <Link 
                  onClick={handleScroll} 
                  href="#experience"
                  className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                >
                  <motion.li
                  initial={{ y: -10, opacity:0 }}
                  animate={{ y: 0, opacity:1 }}
                  transition={{ duration:0.1, delay:0.2 }}
                  >
                   <span className="text-textGreen">02.</span>
                   Experience
                  </motion.li>
                </Link>
                
                <Link 
                  onClick={handleScroll} 
                  href="#project"
                  className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                >
                  <motion.li
                  initial={{ y: -10, opacity:0 }}
                  animate={{ y: 0, opacity:1 }}
                  transition={{ duration:0.1, delay:0.3 }}
                  >
                   <span className="text-textGreen">03.</span>
                   Project
                  </motion.li>
                </Link>
                
                <Link 
                  onClick={handleScroll} 
                  href="#contact"
                  className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                >
                  <motion.li
                  initial={{ y: -10, opacity:0 }}
                  animate={{ y: 0, opacity:1 }}
                  transition={{ duration:0.1, delay:0.4 }}
                  >
                   <span className="text-textGreen">04.</span>
                    Contact
                  </motion.li>
                </Link>
            </ul>
            <a href="/assets/inibukancv.pdf"target="_blank"> 
                <motion.button
                initial={{ y: -10, opacity:0 }}
                animate={{ y: 0, opacity:1 }}
                transition={{ delay:0.5 }}
                className="px-4 py-1.5 rounded-md text-textGreen text-[14px] border border-textGreen hover:bg-hoverColor duration-300 W-[3%]"
                >
                    Download CV
                </motion.button>
            </a>
            </div>
            {/* Small Icon section*/}
            <div 
              onClick={()=> setShowMenu(true)} 
              className="flex flex-col items-center justify-between w-6 h-5 overflow-hidden text-4xl cursor-pointer mdl:hidden text-textGreen group">
                <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            </div>
            {
              showMenu && (
                <div 
                ref={(node) => (ref.current = node)}
                onClick={handlClick}
                className= "absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
                    
                >
                  <motion.div 
                   initial={{ x: 20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ duration: 0.1 }}
                   className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240]
                   flex flex-col items-center px-4 py-10 relative"
                  >
                    <MdOutlineClose 
                        onClick={()=>setShowMenu(false)}
                        className="text-3xl text-textGreen cursor-pointer
                       hover:text-red-500 absolute top-4 right-4"
                    />
                    <div className="flex flex-col text-base gap-7 ">
                        <ul className="flex flex-col text-base gap-7 ">
                            <Link
                              onClick={handleScroll} 
                              href="#home"
                              className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                            >
                              <motion.li
                              initial={{ x: 20, opacity:0 }}
                              animate={{ x: 0, opacity:1 }}
                              transition={{ 
                                  duration:0.2,
                                  delay: 0.1,
                                  ease: "easeIn", 
                                }}
                              >
                                Home
                              </motion.li>
                            </Link>
                  
                              <Link 
                                onClick={handleScroll} 
                                href="#about"
                                className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                              >
                                <motion.li
                                initial={{ x: 20, opacity:0 }}
                                animate={{ x: 0, opacity:1 }}
                                transition={{ 
                                  duration:0.2, 
                                  delay:0.2,
                                  ease: "easeIn",
                                 }}
                                >
                                <span className="text-textGreen">01.</span>
                                About
                                </motion.li>
                              </Link>
                  
                              <Link 
                                onClick={handleScroll} 
                                href="#experience"
                                className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                              >
                                <motion.li
                                initial={{ x: 20, opacity:0 }}
                                animate={{ x: 0, opacity:1 }}
                                transition={{ 
                                  duration:0.2, 
                                  delay:0.3,
                                  ease:"easeIn", 
                                }}
                                >
                                <span className="text-textGreen">02.</span>
                                Experience
                                </motion.li>
                              </Link>
                  
                              <Link 
                                onClick={handleScroll} 
                                href="#project"
                                className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                              >
                                <motion.li
                                initial={{ x: 20, opacity:0 }}
                                animate={{ x: 0, opacity:1 }}
                                transition={{ 
                                  duration:0.2, 
                                  delay:0.4,
                                  ease:"easeIn", 
                                }}
                                >
                                <span className="text-textGreen">03.</span>
                                Project
                                </motion.li>
                              </Link>
                              
                              <Link 
                                onClick={handleScroll} 
                                href="#contact"
                                className="flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link"
                              >
                                <motion.li
                                initial={{ x: 20, opacity:0 }}
                                animate={{ x: 0, opacity:1 }}
                                transition={{ 
                                  duration:0.2, 
                                  delay:0.4,
                                  ease: "easeIn", 
                                }}
                                >
                                <span className="text-textGreen">04.</span>
                                  Contact
                                </motion.li>
                              </Link>
                        </ul>
                        <a href="/assets/inibukancv.pdf"target="_blank"> 
                          <motion.button
                          initial={{ opacity:0 }}
                          animate={{ opacity:1 }}
                          transition={{ delay:0.6, ease: "easeIn" }}
                          className="px-4 py-1.5 rounded-md text-textGreen text-[14px] border border-textGreen hover:bg-hoverColor duration-300 W-[4%]"
                          >
                              Download CV
                          </motion.button>
                        </a> 
                    
                        <div className="flex gap-4">
                          <motion.a
                            initial={{ y: 20,opacity:0 }}
                            animate={{ y:0, opacity:1 }}
                            transition={{ delay:0.90, ease: "easeIn" }}
                            href="https://github.com/ysufhidayatulloh"
                            target="_blank"
                          >
                            <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-md cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2 border-textGreen">
                              <TbBrandGithub />
                            </span>
                          </motion.a>

                          <motion.a
                            initial={{ y: 20,opacity:0 }}
                            animate={{ y:0, opacity:1 }}
                            transition={{ delay:0.95, ease: "easeIn" }}
                            href="https://www.tiktok.com/ysufhidayatulloh_"
                            target="_blank"
                          >
                            <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-md cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2 border-textGreen">
                              <IoLogoTiktok />
                            </span>
                          </motion.a>

                          <motion.a
                            initial={{ y: 20,opacity:0 }}
                            animate={{ y:0, opacity:1 }}
                            transition={{ delay:0.95, ease: "easeIn" }}
                            href="https://www.instagram.com/ysfhidayatulloh_"
                            target="_blank"
                          >
                            <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-md cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2 border-textGreen">
                              <FaInstagram />
                            </span>
                          </motion.a>
                        </div>
                    </div>
                  </motion.div>
                </div>
              )
            }
        </div>
    </div>
  );
};

export default Navbar;