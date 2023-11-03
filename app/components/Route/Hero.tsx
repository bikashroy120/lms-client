import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" w-[90%] 800px:w-[92%] mx-auto flex items-center">
      <div className="flex 1000px:flex-row flex-col w-full items-center py-10 gap-10 justify-between">
        <div className=" relative ">
          <div className="hero_animation rounded-full 1200px:w-[600px] 1200px:h-[600px] 800px:w-[500px] w-[350px] h-[350px] 800px:h-[500px]"></div>
          <div className=" absolute 800px:top-[60px] 800px:left-[80px] top-3 left-2">
            <Image
              src={"/main.png"}
              width={1200}
              height={1200}
              alt="heroimg"
              className=" 800px:w-[450px]  800px:h-[450px] w-[300px] h-[300px]"
            />
          </div>
        </div>
        <div className=" 1200px:w-[40%] flex flex-col justify-end">
          <h2 className=" 800px:text-[55px] text-[25px] text-black dark:text-white">
            Improve Your Online Learning Experience Better Instantly
          </h2>
          <p className=" text-dark dark:text-light font-Josefin font-semibold 800px:w-[70%] w-full py-3">
            We have 40k+ Online courses & 500k+ registered student. Find your
            desired Courses from them{" "}
          </p>
          <div className=" 1200px:w-[80%] bg-gray-400 overflow-hidden flex items-center justify-between rounded-md dark:bg-[#575757]  text-white">
            <input
              type="text"
              className=" bg-transparent placeholder:text-white w-full px-2 outline-none border-none text-white"
              placeholder="Search Courses..."
            />
            <button className="px-3 py-3 h-full bg-[#39c1f3]">
              <Icon icon="tabler:search" className=" text-white text-[20px]" />
            </button>
          </div>
          <div className="mt-5 800px:flex hidden items-center gap-2 font-Josefin font-semibold">
              <div className="flex items-center ">
                  <Image src={"/man-1.jpg"} width={60} height={60} alt="image" className=" h-[35px] w-[35px] rounded-full"/>
                  <Image src={"/man-2.jpg"} width={60} height={60} alt="image" className=" h-[35px] ml-[-15px] w-[35px] rounded-full"/>
                  <Image src={"/man-1.jpg"} width={60} height={60} alt="image" className=" h-[35px] ml-[-15px] w-[35px] rounded-full"/>
              </div>
              <p className="text-dark dark:text-light ">500k+ People already trusted us .</p>
              <button className=" text-[crimson] dark:text-[#46e256]">View Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
