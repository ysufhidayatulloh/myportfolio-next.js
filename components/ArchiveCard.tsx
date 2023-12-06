import Link from "next/link";
import { title } from "process";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props{
    title:string;
    des:string;
    listItem:string[];
    link:string;
}

const ArchiveCard = ({ title, des, listItem, link}: Props) => {
  return (
    <a href={link} target="_blank">
        <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col gap-6 justify-center
            hover:-translate-y-2 transition-transform duration-300 group">
            <div className="flex justify-between items-center">
                <FaRegFolder className="text-4xl text-textGreen"/>
                <RxOpenInNewWindow className="text-4xl hover:text-textGreen"/>
            </div>
            <div>
                <h3 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
                    {title}
                </h3>
                <p className="text-sm mt-3">{des}</p>
            </div>
            <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between
            flex-wrap">
                {
                    listItem.map((item,i)=>(
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        </div>
    </a>
  );
};

export default ArchiveCard;
