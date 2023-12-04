import React from 'react'
import Home from '../pages/index';
import Link from 'next/link';
import {motion} from "framer-motion";
// import Image from 'next/image';
// import {logo} from '@/public/assets';

const Navbar = () => {
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
                  href="#home"
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
                  href="#about"
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
                  href="#about"
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
                  href="#about"
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
            <div className="flex flex-col items-center justify-between w-6 h-5 overflow-hidden text-4xl cursor-pointer mdl:hidden text-textGreen group">
                <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            </div>
        </div>
    </div>
  );
};

export default Navbar;