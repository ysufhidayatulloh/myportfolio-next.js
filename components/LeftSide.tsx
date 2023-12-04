import { TbBrandGithub } from "react-icons/tb";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className="flex justify-end w-full h-full gap-4 dlex-col item-center text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ysufhidayatulloh"target="_blank">
            <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-md cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2 border-textGreen">
              <TbBrandGithub />
            </span>
        </a>
        <a href="https://www.tiktok.com/@ysfhidayatulloh_"target="_blank">
            <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-md cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2 border-textGreen">
              <IoLogoTiktok />
            </span>
        </a>
        <a href="https://instagram.com/ysfhidayatulloh_"target="_blank">
            <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-md cursor-pointer bg-hoverColor hover:text-textGreen hover:-translate-y-2 border-textGreen">
              <FaInstagram />
            </span>
        </a>
      </div>
    </div>
  ); 
};

export default LeftSide;