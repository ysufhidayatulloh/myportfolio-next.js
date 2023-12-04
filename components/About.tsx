import { TbAlienFilled, TbArrowsDiagonal2 } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { IoAirplane } from "react-icons/io5";
import { profileImg } from "@/public/assets";

const About = () => {
  return (
    <section 
        id="about"
        className="flex flex-col gap-8 py-10 mx-auto max-w-containerSmall lgl:py-32"
    >
      <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col gap-16 lgl:flex-row">
            <div className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark">
                <p>
                    Hello! ,My name is Yusuf Mohammad and I enaoy creating things that live pn the internate. 
                    My internate in web development started back in 2023 when I decided to try editing ustom 
                    Tumblr themes - turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p>
                    Fast-forward to today, and I had the privilege of working at an advertising agency, a star-up,{" "}
                        <span className="text-textGreen">
                            a huge corporation, and a student-ide design studio.
                        </span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate itaque magnam eius quaerat optio. At, est. 
                    Odit voluptatem dicta totam magni inventore provident dolor, facilis,{" "}
                        <span className="text-textGreen">
                            ab natus consequuntur obcaecati quam illo quasi?
                        </span>
                </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia recusandae illo? Hic,
                    totam quae doloremque voluptas deleniti quibusdam ipsa, dolore cumque voluptatum modi voluptatem?
                    </p>
                <p>Here are a few technologies I have been working with recently:</p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        JavaScript (ES6+)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        Next.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        React
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        Node.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        Tailwindcss
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        MySQL
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <TbArrowsDiagonal2/>
                        </span>
                        PHP
                    </li>
                </ul>
            </div>
            <div className="relative w-1/4 group">
                <div className="absolute w-full rounded-lg h-80 -left-6 -top-6">
                    <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0"> 
                        <Image 
                            className="h-full rounded-lg object-countain"
                            src={profileImg}
                            alt="profile"
                        />
                        <div className="absolute top-0 left-0 hidden w-full rounded-md h-80 lgl:inline-block bg-textGreen/10 group-hover:bg-transparent duration-300:">
                        </div>
                    </div>
                        <div className="hidden w-full transition-transform duration-300 border-2 rounded-md lgl:inline-flex h-70 border-textGreen group-hover:-translate-y-2">
                        </div>
                </div> 
            </div>
        </div>
    </section>
  );
};

export default About;
