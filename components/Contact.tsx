import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto px-4 py-24 xl:py-32 flex flex-col gap-4 items-center "
    //   "max-w-contentContainer max-auto py-24 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center traking-wide">
        04. What`s Next?
      </p>
      <h3 className="font-titleFont text-5xl font-semibold">Get In Touch</h3>
      <p className="max-w-[600px] text-center text-textDark">
        Although I`m not currently looking for any new opportunities, my inbox 
        is always open. Whether you have a question or just want to say hi, I`ll try my best
        to go back to you!!
      </p>
      <a href="mailto:ysfhidayatuloh12@gmail.com">
        <button className="w-36 h-12 border border-textGreen mt-6 font-titleFont text-sm
        text-textGreen tracking-widor rounded-md hover:bg-hoverColor duration-300">
            Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
