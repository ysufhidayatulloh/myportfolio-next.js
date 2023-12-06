import {motion} from "framer-motion"
import { TiArrowForward } from "react-icons/ti";

const CSstudio = () => {
  return (
    <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.1 }}
        className="w-full"
    >
      <h5 className="flex gap-1 text-xl font-medium font-titleFont">
         Frond End Web Developer
         <a href="https://codingstudio.id/"target="_blank">
            <p className="tracking-wide text-textGreen hover:text-textLight">
            @Coding Studio
            </p>
        </a>
      </h5>
      <p className="mt-1 text-sm font-medium text-textDark">
        June 2023 - Present
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          I learned the fundamentals and setup from scratch from HTML, CSS, JAVACSRIPT
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

export default CSstudio;
