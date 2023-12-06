import {motion} from "framer-motion"
import { TiArrowForward } from "react-icons/ti";

const Bootcamp = () => {
  return (
    <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.1 }}
        className="w-full"
    >
      <h5 className="flex gap-1 text-xl font-medium font-titleFont">
        Not Found
         {/* <a href="https://www.uniska-kediri.ac.id/"target="_blank">
            <p className="tracking-wide text-textGreen hover:text-textLight">
            @UNISKA
            </p>
        </a> */}
      </h5>
      <p className="mt-1 text-sm font-medium text-textDark">
        **
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          ..
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>
          ..
        </li>
      </ul>
    </motion.div>
  );
};

export default Bootcamp;
