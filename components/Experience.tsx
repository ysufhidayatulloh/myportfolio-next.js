import SectionTitle from "./SectionTitle";
import React, { useState } from "react";
import Madrasah from "./study/Madrasah";
import Campus from "./study/Campus";
import Bootcamp from "./study/Bootcamp";
import CSstudio from "./study/CSstudio";

const Experience = () => {
    const [studyMadrasah, setstudyMadrasah] = useState(true);
    const [studyCampus, setstudyCampus] = useState(false);
    const [studyCSstudio, setstudyCSstudio] = useState(false);
    const [studyBootcamp, setstudyBootcamp] = useState(false);

    const handleMadrasah = () => {
      setstudyMadrasah(true);
      setstudyCampus(false);
      setstudyCSstudio(false);
      setstudyBootcamp(false);
    };
    const handleCampus = () => {
      setstudyMadrasah(false);
      setstudyCampus(true);
      setstudyCSstudio(false);
      setstudyBootcamp(false);
    };
    const handleCSstudio = () => {
      setstudyMadrasah(false);
      setstudyCampus(false);
      setstudyCSstudio(true);
      setstudyBootcamp(false);
    };
    const handleBootcamp = () => {
      setstudyMadrasah(false);
      setstudyCampus(false);
      setstudyCSstudio(false);
      setstudyBootcamp(true);
    };

    
  return (
    <section
     id="experience"
     className="px-4 py-10 mx-auto max-w-containerxs lgl:py-24"
    >
      <SectionTitle title="Where I went to study" titleNo="02" />
      <div className="flex flex-col w-full gap-16 mt-10 md:flex-row">
        <ul className="flex flex-col md:w-32">
            <li
             onClick={handleMadrasah}
             className={`${
                studyMadrasah 
              ? "border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240]
              py-3 text-sm cursor-pointer duration-300 px-7 font-medium`}
            >
              Madrasah
            </li>
            
            <li
              onClick={handleCampus}
              className={`${
                studyCampus 
              ? "border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240]
              py-3 text-sm cursor-pointer duration-300 px-7 font-medium`}
            >
              Campus
            </li>
            
            <li 
              onClick={handleCSstudio}
              className={`${
                studyCSstudio
              ? "border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240]
              py-3 text-sm cursor-pointer duration-300 px-7 font-medium`}
            >
              CS Studio
            </li>
            
            <li 
              onClick={handleBootcamp}
              className={`${
                studyBootcamp 
              ? "border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240]
              py-3 text-sm cursor-pointer duration-300 px-7 font-medium`}
            >
              Bootcamp
            </li>
        </ul>
        {studyMadrasah && <Madrasah />} 
        {studyCampus && <Campus />} 
        {studyCSstudio && <CSstudio />} 
        {studyBootcamp && <Bootcamp />} 
      </div>
    </section>
  );
};

export default Experience;
