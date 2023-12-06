import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { helloImg } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section id="project" className="py-24 max-w-container max-auto lgl:px-20">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="flex flex-col items-center justify-between w-full mt-10 gap-28">
        {/* Project one */}
        <div className="flex flex-col items-center justify-between w-full mt-10 gap-28">
            <div className="flex flex-col gap-6 xl:flex-row">
                <a 
                    className="relative w-full h-auto xl:w-1/2 group"
                    href="https://helloworld-app.vercel.app/"
                    target="_blank"
                >
                <div>
                    <Image
                    className="object-contain w-full h-full rounded-md"
                    src={helloImg}
                    alt="helloword"
                    />
                </div>  
                </a>
                <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
                    <p className="text-sm tracking-wide font-titleFont text-textGreen">
                        Fatured Project
                    </p>
                    <h5 className="text-2xl font-bold">Hello World Clone</h5>
                    <p className="bg-[#0d1c38] text-sm md:text-base p-2 md:p-6 rounded-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure magnam suscipit quidem labore a{" "}
                        <span className="text-textGreen">0-auth</span> and then make the purchage using <span className="text-textGreen">stripe</span>.
                    </p>
                    <ul className="flex gap-2 text-xs tracking-wide md:text-sm font-titleFont wd:gap-5 justify-betwen text-textDark">
                        <li>Nextjs</li>
                        <li>Typescript</li>
                        <li>Next-auth</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    <div className="flex gap-4 text-2xl">
                        <a 
                        className="duration-300 hover:text-textGreen"
                        href="https://github.com/ysufhidayatulloh/helloworld-app"
                        target="_blank"
                        >
                            <TbBrandGithub />
                        </a>
                        <a 
                        className="duration-300 hover:text-textGreen"
                        href="https://helloworld-app.vercel.app/"
                        target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
            </div>   
        </div>
        {/* Project two */}
            <div className="flex flex-col gap-6 xl:flex-row-reverse">
                <a 
                    className="relative w-full h-auto xl:w-1/2 group"
                    href="https://helloworld-app.vercel.app/"
                    target="_blank"
                >
                <div>
                    <Image
                    className="object-contain w-full h-full rounded-md"
                    src={helloImg}
                    alt="helloword"
                    />
                </div>  
                </a>
                <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between ">
                    <p className="text-sm tracking-wide font-titleFont text-textGreen">
                        Fatured Project
                    </p>
                    <h5 className="text-2xl font-bold">Hello World Clone</h5>
                    <p className="bg-[#0d1c38] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure magnam suscipit quidem labore a{" "} 
                        <span className="text-textGreen">0-auth</span> and then make the purchage using <span className="text-textGreen">stripe</span>.
                    </p>
                    <ul className="flex gap-2 text-xs tracking-wide md:text-sm font-titleFont wd:gap-5 justify-betwen text-textDark">
                        <li>Nextjs</li>
                        <li>Typescript</li>
                        <li>Next-auth</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    <div className="flex gap-4 text-2xl">
                        <a 
                        className="duration-300 hover:text-textGreen"
                        href="https://github.com/ysufhidayatulloh/helloworld-app"
                        target="_blank"
                        >
                            <TbBrandGithub />
                        </a>
                        <a 
                        className="duration-300 hover:text-textGreen"
                        href="https://helloworld-app.vercel.app/"
                        target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
            </div> 
        {/* Project Tree */}      
            <div className="flex flex-col gap-6 xl:flex-row">
                <a 
                    className="relative w-full h-auto xl:w-1/2 group"
                    href="https://helloworld-app.vercel.app/"
                    target="_blank"
                >
                <div>
                    <Image
                    className="object-contain w-full h-full rounded-md"
                    src={helloImg}
                    alt="helloword"
                    />
                </div>  
                </a>
                <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
                    <p className="text-sm tracking-wide font-titleFont text-textGreen">
                        Fatured Project
                    </p>
                    <h5 className="text-2xl font-bold">Hello World Clone</h5>
                    <p className="bg-[#0d1c38] text-sm md:text-base p-2 md:p-6 rounded-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure magnam suscipit quidem labore a{" "}
                        <span className="text-textGreen">0-auth</span> and then make the purchage using <span className="text-textGreen">stripe</span>.
                    </p>
                    <ul className="flex gap-2 text-xs tracking-wide md:text-sm font-titleFont wd:gap-5 justify-betwen text-textDark">
                        <li>Nextjs</li>
                        <li>Typescript</li>
                        <li>Next-auth</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    <div className="flex gap-4 text-2xl">
                        <a 
                        className="duration-300 hover:text-textGreen"
                        href="https://github.com/ysufhidayatulloh/helloworld-app"
                        target="_blank"
                        >
                            <TbBrandGithub />
                        </a>
                        <a 
                        className="duration-300 hover:text-textGreen"
                        href="https://helloworld-app.vercel.app/"
                        target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Project;
