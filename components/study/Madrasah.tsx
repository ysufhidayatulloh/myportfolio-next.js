import {motion} from "framer-motion"
import { TiArrowForward } from "react-icons/ti";

const Madrasah = () => {
  return (
    <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.1 }}
        className="w-full"
    >
      <h5 className="flex gap-1 text-xl font-medium font-titleFont">
         Religious Major 
         <a href="https://maalhikmahkdr.blogspot.com/"target="_blank">
            <p className="tracking-wide text-textGreen hover:text-textLight">
            @MA Al-Hikmah
            </p>
        </a>
      </h5>
      <p className="mt-1 text-sm font-medium text-textDark">
        Jan 2017/2018 - Present
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          I learned about deepening religious knowledge and knowledge 
          about the legal challenges that exist in the Islamic religion.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Laudantium commodi magni voluptatem. Voluptatum repellendus 
          nisi quas neque aperiam aspernatur hic.
        </li>
      </ul>
    </motion.div>
  );
};

export default Madrasah;
