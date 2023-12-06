import { TbBrandGithub } from "react-icons/tb";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center
    w-full py-6 gap-4">
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
  );
};

export default Footer;
