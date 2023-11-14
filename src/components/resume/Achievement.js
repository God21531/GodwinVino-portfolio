import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2023</p>
          <h2 className="text-4xl font-bold">At School</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HOCKEY"
            subTitle='Hockey-Winner in the Super-Senior Level at std "11" ' 
            result= "ZION MATRIC HR SEC SCHOOL"
            des="held, during the academic year 2019-2020."
          />
          <a href='https://drive.google.com/file/d/1uybWlj-EbgrEaFSTv8UdCtZ8pn2Vi44y/view?usp=sharing' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Hockey Certificate.
                </button>
              </div>
              </a>

              <ResumeCard
            title="SINGING COMPETITION"
            subTitle='2nd Prize in Singing Competition at ' 
            result= "ZION MATRIC HR SEC SCHOOL"
            des="held, during the academic year 2008-2020."
          />
          <a href='https://drive.google.com/file/d/1IND2c7dCbj0Qgz5X_v8W6VwAU6p1BAq5/view?usp=sharing' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Singing Certificate.
                </button>
              </div>
              </a>
              </div>
      </div>
      <div>

              

{/*
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        

  */}
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">At College</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DATRONIX'23"
            subTitle="Stage Performer at SRM DATRONIX'23 on Adaptune Round"
            result="SRM RAMAPURAM COLLEGE"
            des="I'm an Enthusiastic Dancer and on stage performer"
          />
          <a href='https://drive.google.com/file/d/1UFfTK_z_lA6BMYQER4W32mUSVOqlgzSd/view?usp=sharing' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  SRM DATRONIX'23 PERFORMANCE 1 
                </button>
              </div>
              </a>
              <a href='https://drive.google.com/file/d/1UWoUDv-PP1551znxJ3QV82TqN7Mdfh5V/view?usp=share_link' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  SRM DATRONIX'23 PERFORMANCE 2 
                </button>
              </div>
              </a>

         
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
