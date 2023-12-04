import  React from "react";

const RightSide = () => {
    return (
       <div className="flex flex-col items-center justify-end w-full h-full gap-6 text-textlight">
        <a href="mailto:ysfhidatulloh12@gmail.com">
            <p className="text-sm tracking-wide rotate-90 w-60 text-textGreen hover:text-textLight">
            send.via.email.me
            </p>
        </a>
        <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
       </div>
    ); 
};

export default RightSide;