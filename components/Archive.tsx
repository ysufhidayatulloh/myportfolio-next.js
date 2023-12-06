import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Archive = () => {
    const [showMore,setShowMore]= useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
      <h3 className="text-3xl font-titleFont font-semibold">
        Other Noteworthy Projects
      </h3>
      <p className="text-sm font-titleFont text-textGreen">
        view the archive
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard 
            title="Educare Englise Learning Academy 1"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
            listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
            link="//"
        />

        <ArchiveCard 
            title="Educare Englise Learning Academy 2"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
            listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
            link="//"
        />

        <ArchiveCard 
            title="Educare Englise Learning Academy 3"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
            listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
            link="//"
        />
        
        <ArchiveCard 
            title="Educare Englise Learning Academy 4"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
            listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
            link="//"
        />


        <ArchiveCard 
            title="Educare Englise Learning Academy 5"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
            listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
            link="//"
        />

        <ArchiveCard 
            title="Educare Englise Learning Academy 6"
            des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
            listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
            link="//"
        />



        {
            showMore && (
                <>
                    <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:0.1 }}
                    >   
                    <ArchiveCard 
                        title="Testing 1"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
                        listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                        link="//"
                    />
                    </motion.div>
                    <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:0.2 }}
                    >   
                    <ArchiveCard 
                        title="Testing 2"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
                        listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                        link="//"
                    />
                    </motion.div>
                    <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:0.3 }}
                    >   
                    <ArchiveCard 
                        title="Testing 3"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
                        listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                        link="//"
                    />
                    </motion.div>
                    <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:0.4 }}
                    >   
                    <ArchiveCard 
                        title="Testing 4"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
                        listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                        link="//"
                    />
                    </motion.div>
                    <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:0.5 }}
                    >   
                    <ArchiveCard 
                        title="Testing 5"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
                        listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                        link="//"
                    />
                    </motion.div>
                    <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:0.6 }}
                    >   
                    <ArchiveCard 
                        title="Testing 6"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fuga sit neque sequi beatae. Adipisci.."
                        listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                        link="//"
                    />
                    </motion.div>
                </>
            )
        }
      </div>
      <div className="mt-12 flex items-center justify-center">
        {
            showMore ? (
              <button 
                onClick={() => setShowMore(false)}
                className="w-36 h-12 rounded-md text-textGreen text-[13px] border
                border-textGreen hover:bg-hoverColor duration-300">
                    Show Less
              </button>
            ) : (
                <button 
                onClick={() => setShowMore(true)}
                className="w-36 h-12 rounded-md text-textGreen text-[13px] border
                border-textGreen hover:bg-hoverColor duration-300">
                   Show More
               </button>     
            )   
        }
        
      </div>
    </div>
  );
};

export default Archive;
